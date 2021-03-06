/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <jkehl.dev@gmail.com> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return Johann KEHL.
 * ----------------------------------------------------------------------------
 */

require('dotenv').config();
const redisClient = require('./app/DB/redisClient');
const express = require('express');

/**
 * @author KEHL Johann <jkehl.dev@gmail.com>
 * @version 1.0.0
 * @description Main app module. Configure Express HTTPS web server.
 */
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(
  express.urlencoded({
    extended: true,
  })
);

// Use Helmet to ensure minimal security Headers configuration
const helmet = require('helmet');
app.use(helmet());

// Use enforceHttps to force redirection from HTTP to HTTPS
const enforceHttps = require('./app/middlewares/enforceHttps');
app.use(enforceHttps(process.env.PORT_HTTP, process.env.PORT_HTTPS));

// Use morgan module to provide tiny request logger
const morgan = require('morgan');
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);

// Use cors to manage cors policy
const corsUserConfig = require('./config/corsUser.json');
const cors = require('cors');
app.use(cors(corsUserConfig));

// Use express-session to manage user session and Redis to store it in app cache
const session = require('express-session');
let RedisStore = require('connect-redis')(session);
const randomString = require('randomstring');
const secret = randomString.generate({
  length: 14,
  charset: 'alphanumeric',
});
app.use(
  session({
    secret,
    name: 'sessionUser',
    store: new RedisStore({ client: redisClient }),
    saveUninitialized: true,
    resave: false,
    cookie: {
      secure: true,
      httpOnly: true,
      //  domain: 'example.com',
      //  path: 'foo/bar',
      maxAge: 1000 * 60 * 60,
    },
  })
);

app.use(express.static('public'));

// TABLE ROUTING
const midlleware_server = require('./app/middlewares/middleware_server');
const router_main = require('./app/routers/router_main');
app.use('/', midlleware_server.initilizeLocalsNdSession, router_main);

const router_error = require('./app/routers/router_error');
app.use('/error', router_error);

const router_user = require('./app/routers/router_user');
app.use('/user', midlleware_server.isSignInOrRedirect, router_user);

const router_admin = require('./app/routers/router_admin');
app.use('/admin', midlleware_server.isAdminOrRedirect, router_admin);

// PAGE NOT FOUND AFTER ALL
// Errors Routes
const errors = require('./app/middlewares/errors');
app.use(errors.error404);
app.use(errors.error500);

// Server instance
const serverHttp = app.listen(process.env.PORT_HTTP, () => {
  console.log('LISTEN PORT', process.env.PORT_HTTP);
});

const fs = require('fs');
const options = {
  key: fs.readFileSync('./tsl/key.pem'),
  cert: fs.readFileSync('./tsl/cert.pem'),
  dhparam: fs.readFileSync('./tsl/dh-strong.pem'),
};
const https = require('https');
const serverHttps = https.createServer(options, app).listen(process.env.PORT_HTTPS);

// ==============================================================
// CLOSING PROCESS CASE - TO CLOSE PROPERLY DATABASE CLIENT CONNEXION
//
process.stdin.resume(); //so the program will not close instantly
function exitHandler(options, exitCode) {
  // ==============================
  // DO SOMETHING HERE TO CLOSE YOUR DB PROPERLY IF IT NEED :
  serverHttp.close((error) => {
    console.error(error);
  });
  serverHttps.close((error) => {
    console.error(error);
  }); // Close HTTPS Server.
  redisClient.end(true); // Close Redis client connection.

  // ==============================
  if (options.cleanup) console.log('clean');
  if (exitCode || exitCode === 0) console.log(exitCode);
  if (options.exit) process.exit();
}

//do something when app is closing
process.on('exit', exitHandler.bind(null, { cleanup: true }));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, { exit: true }));

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, { exit: true }));
process.on('SIGUSR2', exitHandler.bind(null, { exit: true }));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, { exit: true }));
