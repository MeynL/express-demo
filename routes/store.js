var express = require('express');
var router = express.Router();
var booklist = require('../database/books');

router.get('/', function(req, res, next) {
  res.render('store/index', { title: '阅客联盟',books:booklist  });
});

module.exports = router;
