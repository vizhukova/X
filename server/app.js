var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
// var cookieParser = require('cookie-parser');
// var methodOverride = require('method-override');
// var morgan = require('morgan');
var config = require('./config');
// var _ = require('lodash');
// var jwt = require('jwt-simple');
var moment = require('moment');
var checkError = require('./checkError');

var port = 3050;
var app = express();
var http = require('http').Server(app).listen(port);

// app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(bodyParser.json({limit: '50mb'}));
// app.use(cookieParser());
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'templates'));
app.use('/public', express.static(path.join(__dirname, 'public')));
// app.use(favicon(__dirname + '/public/favicon.ico'));
// app.use(methodOverride('_method'));

var timestamp = Date.now();
var designClass = config.get('designClass');

/**
 * Отрисовка страницы клиента
 */
app.get('/', function(req, res){
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
  res.render('error', { error: err });
});

var server = http.listen(config.get('port'), function() {
    console.log("Listening %s on port: %s", server.address().address, server.address().port)
});
