var express = require('express');
var router = express.Router();

var AddressController = require('../controller/Address');

router.get('/countries', function(req, res, next) {
    AddressController.getCountries().then(data => {
        res.send({data: data});
    }).catch(err => {
        res.status(401).send(err);
    })
});

router.get('/districts', function(req, res, next) {
    var data = {
        country_id: req.query.country
    };
    AddressController.getDistricts(data).then(data => {
        res.send({data: data});
    }).catch(err => {
        res.status(401).send(err);
    })
});

router.get('/cities', function(req, res, next) {
    var data = {
        country_id: req.query.country,
        district_id: req.query.district
    };
    AddressController.getCities(data).then(data => {
        res.send({data: data});
    }).catch(err => {
        res.status(401).send(err);
    })
});

router.post('/address', function(req, res, next) {
    AddressController.add(req.body).then(data => {
        res.send({data: data});
    }).catch(err => {
        if(err.errors && err.errors.name.message) {
            res.status(401).send(err.errors.name.message);
        } else {
            next(err);
        }

    })
});

router.get('/addresses', function(req, res, next) {
    AddressController.get().then(data => {
        res.send({data: data});
    }).catch(err => {
        res.status(401).send(err);

    })
});


module.exports = router;