var express = require('express');
var jwt = require('jwt-simple');
var _ = require('underscore');
var router = express.Router();

var ProductController = require('../controllers/Product');

/**
 * Создание продукта
 */
router.post('/product', function (req, res, next) {
    var data = Object.assign({seller_id: req.authUser.id}, req.body);
    ProductController.create(data).then((data) => {
        res.send({data: data});
    }).catch((err) => {
        next(err);
    });
});

module.exports = router;