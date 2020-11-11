/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <jkehl.dev@gmail.com> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return Johann KEHL.
 * ----------------------------------------------------------------------------
 */

/**
 * @author KEHL Johann <jkehl.dev@gmail.com>
 * @version 1.0.0
 * @description Value Trans controller module.
 */

const controller_value_trans = {
    /**
     * @method controller_value_trans#getAll - GET ALL
     * @param {Express.Request} request - Express server request
     * @param {Express.Response} response - Express server response
     */
    getAll(request, response) {
        response.status(200);
        response.send();
    },

    /**
     * @method controller_value_trans#putOne - PUT ONE
     * @param {Express.Request} request - Express server request
     * @param {Express.Response} response - Express server response
     */
    putOne(_, response) {
        response.status(200);
        response.send();
    },

    /**
     * @method controller_value_trans#patchAll - PATCH ALL
     * @param {Express.Request} request - Express server request
     * @param {Express.Response} response - Express server response
     */
    patchAll(_, response) {
        response.status(200);
        response.send();
    },

    /**
     * @method controller_value_trans#deleteAll - DELETE ALL
     * @param {Express.Request} request - Express server request
     * @param {Express.Response} response - Express server response
     */
    deleteAll(_, response) {
        response.status(200);
        response.send();
    },

    /**
     * @method controller_value_trans#getAll - GET BY ID
     * @param {Express.Request} request - Express server request
     * @param {Express.Response} response - Express server response
     */
    getById(request, response) {
        response.status(200);
        response.send();
    },

    /**
     * @method controller_value_trans#putOne - PUT BY ID
     * @param {Express.Request} request - Express server request
     * @param {Express.Response} response - Express server response
     */
    putById(_, response) {
        response.status(501);
        response.send();
    },

    /**
     * @method controller_value_trans#patchAll - PATCH BY ID
     * @param {Express.Request} request - Express server request
     * @param {Express.Response} response - Express server response
     */
    patchById(_, response) {
        response.status(200);
        response.send();
    },

    /**
     * @method controller_value_trans#deleteAll - DELETE BY ID
     * @param {Express.Request} request - Express server request
     * @param {Express.Response} response - Express server response
     */
    deleteById(_, response) {
        response.status(200);
        response.send();
    },
};

module.exports = controller_value_trans;