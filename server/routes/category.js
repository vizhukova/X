var express = require('express');
var jwt = require('jwt-simple');
var _ = require('underscore');
var router = express.Router();

var CategoryController = require('../controllers/Category');

/**
 * Получение всех категорий
 */
router.get('/categories/all', function (req, res, next) {
    CategoryController.get().then((data) => {
        res.send({data: data});
    }).catch((err) => {
        next(err);
    });
});

/**
 * Получение категорий по id родительской категории
 */
router.get('/categories/:id', function (req, res, next) {
    CategoryController.getByParentId(+req.params.id).then((data) => {
        res.send({data: data});
    }).catch((err) => {
        next(err);
    });
});

/**
 * Получение категорий первого уровня
 */
router.get('/categories', function (req, res, next) {
    CategoryController.getHigherestLevel().then((data) => {
        res.send({data: data});
    }).catch((err) => {
        next(err);
    });
});

/**
 * Создание новой категории
 */
router.post('/categories', function (req, res, next) {
    CategoryController.create({
        name: req.body.name,
        seller_id: req.authUser.id,
        parent_id: req.body.parent_id
    }).then((data) => {
        res.send({data: data});
    }).catch((err) => {
        next(err);
    });
});

module.exports = router;