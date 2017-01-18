const express = require('express');
var cors = require('cors');
var path = require('path');
var jade = require('jade');
const port = 4040;
const app = express();
const domain = "http://localhost:4040/";

app.use(cors());
app.set('view engine', 'jade');
app.use(express.static('./server'));
app.set('views', path.join(__dirname, 'templates'));
app.use(express.static(__dirname + '/../server'));
app.use('/post', express.static('/../../server'));

app.use(require('./routes/api'));

app.get('/login', function(req, res) {
    res.render('login', {
        css_name: 'login',
        domain: domain
    });
});

app.get('/register', function(req, res) {
    res.render('register', {
        css_name: 'register',
        domain: domain
    });
});

app.get('/product/new', function(req, res) {
    res.render('add_product', {
        css_name: 'add_product',
        domain: domain
    });
});

app.get('/addresses', function(req, res) {
    res.render('addresses', {
        css_name: 'addresses',
        domain: domain
    });
});

app.get('/addresses/new', function(req, res) {
    res.render('add_address', {
        css_name: 'add_address',
        domain: domain
    });
});

app.get('/', function(req, res) {
    res.render('main', {
        css_name: 'main',
        domain: domain
    });
});

app.get('*', function(req, res) {
    res.render('error', {css_name: 'error'});
});

// app.use((req, res) => {
//     // res.sendFile('templates/register.html', {root: './server'});
//     // res.render('login', {css_name: 'login'});
//     // res.render('add_product', {css_name: 'add_product'});
//     // res.render('register', {css_name: 'register'});
//     // res.render('main', {css_name: 'main'});
//     // res.render('addresses', {css_name: 'addresses'});
//     res.render('add_address', {css_name: 'add_address'});
// });

app.listen(port);
console.log("server started on port " + port);