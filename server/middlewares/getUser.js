var jwt = require('jwt-simple');
var Seller = require('../models/Seller');

/**
 * Получение id клиента
 * @param req
 * @param res
 * @param next
 */
module.exports = function (req, res, next) {

    var user = {};
    req.authUser = {};

    if (req.headers.auth) {
        try {
            user = jwt.decode(req.headers.auth, 'secret');
            if (user.role === 'seller') {
                Seller.getById(user.id).then(data => {
                    req.authUser = Object.assign({}, data, user);
                    next();
                }).catch(err => {
                    next();
                });
            }
        } catch (err) {
            next();
        }
    } else {
        next();
    }


};