const sequelize = require('../../DB/sequelize_client');
const {
    DataTypes,
    Model
} = require('sequelize');


/**
 * @version 1.0.0
 * @description Value_trans class model.
 */
class Value_trans extends Model {}

Value_trans.init({}, {
    sequelize,
    tableName: 'value_trans'
});


module.exports = Value_trans;