var express = require('express');
var router = express.Router();

var api_prefix = '/api';

router.use(api_prefix, require('./user'));

module.exports = router;