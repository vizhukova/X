var express = require('express');
var router = express.Router();

var AddressController = require('../controllers/Address');
var SellerAddress = require('../controllers/SellerAddress');

router.get('/countries', function (req, res, next) {
    AddressController.getCountries().then(data => {
        res.send({data: data});
    }).catch(err => {
        res.status(400).send(err);
    })
});

router.get('/districts', function (req, res, next) {
    var data = {
        country_id: req.query.country
    };

    (() => {
        if (data.country_id >= 0) {
            return AddressController.getDistricts(data);
        } else {
            return AddressController.getAllDistricts();
        }
    })().then(data => {
        res.send({data: data});
    }).catch(err => {
        res.status(400).send(err);
    });
});

router.get('/cities', function (req, res, next) {
    var data = {
        country_id: req.query.country,
        district_id: req.query.district
    };

    (() => {
        if (data.country_id >= 0 && data.district_id >= 0) {
            return AddressController.getCities(data);
        } else {
            return AddressController.getAllCities();
        }
    })().then(data => {
        res.send({data: data});
    }).catch(err => {
        res.status(400).send(err);
    })
});

router.post('/address', function (req, res, next) {
    var newAddress = {};
    AddressController.add(req.body).then(data => {
        newAddress = data;
        return SellerAddress.add({
            seller_id: req.authUser.id,
            addresses_id: data.id
        });
    }).then(data => {
        res.send({data: newAddress});
    }).catch(err => {
        if (err.errors && err.errors.name.message) {
            res.status(400).send(err.errors.name.message);
        } else {
            next(err);
        }

    })
});

router.get('/addresses', function (req, res, next) {
    (function () {
        if (req.authUser.role === 'seller') {
            return SellerAddress.getByUserIdArr(req.authUser.id);
        } else {
            return new Promise((resolve, reject) => reject());
        }
    })().then(data => {
        return AddressController.getByIdArr(data)
    }).then(data => {
        res.send({data: data});
    }).catch(err => {
        res.status(400).send(err);

    })
});

router.get('/addresses/:address_id', function (req, res, next) {
    return AddressController.getById(+req.params.address_id).then(data => {
        res.send({data: data});
    }).catch(err => {
        res.status(400).send(err);

    })
});

router.put('/address/:address_id', function (req, res, next) {
    return AddressController.update(req.body).then(data => {
        res.send({data: data});
    }).catch(err => {
        res.status(400).send(err);

    })
});

router.delete('/address/:address_id', function (req, res, next) {
    return AddressController.remove(+req.params.address_id).then(data => {
        res.send({result: true});
    }).catch(err => {
        res.status(400).send(err);

    })
});


module.exports = router;