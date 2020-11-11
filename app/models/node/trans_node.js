const sequelize = require('../../DB/sequelize_client');
const {
    DataTypes,
    Model
} = require('sequelize');

/**
 * @version 1.0.0
 * @description Trans_node class model.
 */
class Trans_node extends Model {
}

Trans_node.init({}, {
    sequelize,
    tableName: 'trans_node'
});

module.exports = Trans_node;