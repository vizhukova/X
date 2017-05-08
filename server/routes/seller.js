var express = require('express');
var jwt = require('jwt-simple');
var _ = require('underscore');
var router = express.Router();

var UserController = require('../controllers/Seller');
var SellerDocumentsController = require('../controllers/SellerDocuments');

router.post('/seller/register', function(req, res, next) {

    if(req.body.confirm_pass !== req.body.password) {
        res.status(400).send('Пароли не совпадают.')
    }

    var birthday = req.body.birthday;

    var user = {
        birthday: req.body.birthday,
        email: req.body.email,
        legal_entity: req.body.legal_entity,
        name: req.body.name,
        password: req.body.password,
        login: req.body.login
    };

    if(req.body.id_avatars.length) user.avatar = req.body.id_avatars[0];

    var newUser;
    UserController.add(user).then((data) => {

        newUser = _.omit(data, 'created_at', 'updated_at', 'password');
        if(req.body.id_files.length) {
            return Promise.all( req.body.id_files.length.map(doc_id =>
                SellerDocumentsController.add({seller_id: newUser.id, document_id: doc_id}))
            )
        }

    }).then(() => {

        var token = jwt.encode({id: newUser.id, role: 'seller'}, 'secret');

        res.send({
            token: token,
            user: newUser
        });

    }).catch((err) => {

        next(err);

    });
});

router.post('/seller/login', function(req, res, next) {

    var user = req.body;

    UserController.login(user).then((data) => {

        var user = _.omit(data, 'created_at', 'updated_at', 'password');
        var token = jwt.encode({id: user.id, role: 'seller'}, 'secret');

        res.send({
            token: token,
            user: user
        });

    }).catch((err) => {

        next(err);

    });
});

module.exports = router;