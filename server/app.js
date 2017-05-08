var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var config = require('./config');
var moment = require('moment');
var checkError = require('./checkError');

var port = 3050;
var app = express();
var http = require('http').Server(app).listen(port);

app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use(bodyParser.json({limit: '50mb'}));
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'templates'));
app.use('/public', express.static(path.join(__dirname, 'public')));

var timestamp = Date.now();
var designClass = config.get('designClass');

/**
 * Отрисовка страницы клиента
 */
app.get('/', function (req, res) {
    res.render('client', {timestamp: timestamp, designClass: designClass})
});

app.use(require('./routes/api'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    next(err);
});

app.use((err, req, res, next) => {
    if (req.xhr) {
        checkError(err, res);
    } else {
        next(err);
    }
});

app.use((err, req, res, next) => {
    res.status(500);
    res.render('error', {error: err});
});

var server = http.listen(config.get('port'), function () {
    console.log("Listening %s on port: %s", server.address().address, server.address().port)
});
