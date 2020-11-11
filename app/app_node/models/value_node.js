const sequelize = require('../../DB/sequelize_client');
const {
    DataTypes,
    Model
} = require('sequelize');

/**
 * @version 1.0.0
 * @description Value_node class model.
 */
class Value_node extends Model {}

Value_node.init({
    value: {
        type : DataTypes.CHAR(1),
        allowNull : false,
        unique: true
    }
}, {
    sequelize,
    tableName: 'value_node'
});

module.exports = Value_node;