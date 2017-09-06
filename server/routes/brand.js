var express = require('express');
var jwt = require('jwt-simple');
var _ = require('underscore');
var router = express.Router();

var BrandController = require('../controllers/Brand');

/**
 * Получение брендов
 */
router.get('/brand', function (req, res, next) {
    if (req.query.q) {
        BrandController.getByQ(req.query.q).then((data) => {
            res.send({data: data});
        }).catch((err) => {
            next(err);
        });
    } else {
        BrandController.get().then((data) => {
            res.send({data: data});
        }).catch((err) => {
            next(err);
        });
    }
});

module.exports = router;