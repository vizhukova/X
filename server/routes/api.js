var express = require('express');
var router = express.Router();
var getUser = require('./../middlewares/getUser');
var redirect = require('./../middlewares/redirect');

var api_prefix = '/api';

router.use(getUser);

router.use(api_prefix, require('./files'));
router.use(api_prefix, require('./seller'));
router.use(redirect);
router.use(api_prefix, require('./address'));
router.use(api_prefix, require('./category'));
router.use(api_prefix, require('./product'));
router.use(api_prefix, require('./brand'));

module.exports = router;