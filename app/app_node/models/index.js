const Value_node = require('./value_node');
const Value_trans = require('./value_trans');
const Trans_node = require('./trans_node');

Value_node.hasMany(Value_trans, {
    as: 'transTo',
    foreignKey: 'nodeFromId',
});
Value_node.hasMany(Value_trans, {
    as: 'transFrom',
    foreignKey: 'nodeToId',
});

Trans_node.belongsToMany(Trans_node, {
    as: 'childs',
    through: 'trans_node_has_trans_node'
});

Value_trans.belongsToMany(Trans_node, {
    as: 'transNodes',
    foreignKey: 'valueTransId',
    otherKey: 'transNodeId',
    through: 'value_trans_has_trans_node'
});

Trans_node.belongsToMany(Value_trans, {
    as: 'valueTranss',
    foreignKey: 'transNodeId',
    otherKey: 'valueTransId',
    through: 'value_trans_has_trans_node'
});

module.exports = {
    Value_node,
    Value_trans,
    Trans_node
}