/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <jkehl.dev@gmail.com> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return Johann KEHL.
 * ----------------------------------------------------------------------------
 */

const express = require('express');
const controller_trans_node = require('../controllers/controller_trans_node');


/**
 * @author KEHL Johann <jkehl.dev@gmail.com> * 
 * @version 1.0.0
 * @description Trans Node router module.
 */

const router_trans_node = express.Router();

router_trans_node.get('/trans_node', controller_trans_node.getAll);

router_trans_node.put('/trans_node', controller_trans_node.putOne);

router_trans_node.patch('/trans_node', controller_trans_node.patchAll);

router_trans_node.delete('/trans_node', controller_trans_node.deleteAll);

// By id
router_trans_node.get('/trans_node/:id', controller_trans_node.getById);

router_trans_node.put('/trans_node/:id', controller_trans_node.putById);

router_trans_node.patch('/trans_node/:id', controller_trans_node.patchById);

router_trans_node.delete('/trans_node/:id', controller_trans_node.deleteById);

module.exports = router_trans_node;
