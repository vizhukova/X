var express = require('express');
var router = express.Router();

router.get('/register', function(req, res) {
    res.render('register', {css_name: 'register'});
});

router.get('/login', function(req, res) {
    res.render('login', {css_name: 'login'});
});

module.exports = router;