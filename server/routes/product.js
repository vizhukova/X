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

/**
 * Получение продуктов по q
 */
router.get('/product', function (req, res, next) {
    ProductController.getByQ(req.query.q).then((data) => {
        res.send({data: data});
    }).catch((err) => {
        next(err);
    });
});

/**
 * Получение продуктов по id
 */
router.get('/product/:id', function (req, res, next) {
    ProductController.getById(+req.params.id).then((data) => {
        res.send({data: data});
    }).catch((err) => {
        next(err);
    });
});

/**
 * Получение продуктов по id категории
 */
router.get('/product/category/:category_id', function (req, res, next) {
    ProductController.getByCategory(+req.params.category_id).then((data) => {
        res.send({data: data});
    }).catch((err) => {
        next(err);
    });
});

/**
 * Получение данных для редактирования
 */
router.get('/product/edit', function (req, res, next) {
    // var getProduct = ProductController.getByCategory(+req.params.category_id).then((data) => {
    //     res.send({data: data});
    // }).catch((err) => {
    //     next(err);
    // });
});

/**
 * Удаление
 */
router.delete('/product/:id', function (req, res, next) {
    ProductController.delete(+req.params.id).then((data) => {
        res.send({data: data});
    }).catch((err) => {
        next(err);
    });
});

module.exports = router;