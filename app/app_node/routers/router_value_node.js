/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <jkehl.dev@gmail.com> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return Johann KEHL.
 * ----------------------------------------------------------------------------
 */

const express = require('express');
const controller_value_node = require('../controllers/controller_value_node');


/**
 * @author KEHL Johann <jkehl.dev@gmail.com>
 * @version 1.0.0
 * @description Value Node router module.
 */

const router_value_node = express.Router();

router_value_node.get('/value_node', controller_value_node.getAll);

router_value_node.put('/value_node', controller_value_node.putOne);

router_value_node.patch('/value_node', controller_value_node.patchAll);

router_value_node.delete('/value_node', controller_value_node.deleteAll);


module.exports = router_value_node;