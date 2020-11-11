require('dotenv').config();
const {Sequelize} = require('sequelize');

/**
 * @version 1.0.0
 * @description Sequelise client module
 */
const sequelize_client = new Sequelize(
    process.env.PG_URL,
    {
        define: {
            underscored: true,
            timestamps: true
        },

        logging: false,
        createdAt: 'created_At',
        updatedAt: 'updated_At'
    }
);

sequelize_client.sync({
    force: true
});

module.exports = sequelize_client;