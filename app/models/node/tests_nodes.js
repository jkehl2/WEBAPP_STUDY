const {
    Node, Transition
} = require('./index');

// NodeLinks.create({
//     nodeToId: 7,
//     nodeFromId: 1
// }).then(() => {
//     NodeLinks.findAll().then((result) => {
//         console.table(result)
//     });
// });
// Node.create({
//     id: 88,
//     nodesFrom: [{
//         id: 91
//     },{
//         id: 92
//     },{
//         id: 93
//     }]
// }, {
//     include: [{
//         model: Node,
//         as: 'nodesFrom'
//     }],
// })
// .then(() => NodeLink.findAll())
// .then((result) => {
//     console.table(result);
//     return Node.findAll();
// }).then((result) => console.table(result))
// .finally(() => require('./app/DB/sequelize_client').close());

// Node.update({
//         where: {
//             id: 88
//         },
//         nodesFrom: [{
//             id: 94
//         }, {
//             id: 92
//         }, {
//             id: 93
//         }]
//     }, {
//         include: [{
//             model: Node,
//             as: 'nodesFrom'
//         }],
//     })
//     .then(() => NodeLink.findAll())
//     .then((result) => {
//         console.table(result);
//         return Node.findAll();
//     }).then((result) => console.table(result))
//     .finally(() => require('./app/DB/sequelize_client').close());


// NodeLink.bulkCreate([{
//     NodeId: 88,
//     nodesFromId: 91
// }, {
//     NodeId: 88,
//     nodesFromId: 92
// }, {
//     NodeId: 88,
//     nodesFromId: 93
// }]
// ).then(() => NodeLink.findAll())
//     .then((result) => {
//         console.table(result);
//         return Node.findAll();
//     }).then((result) => console.table(result))
//     .finally(() => require('./app/DB/sequelize_client').close());