var express = require('express');
var router = express.Router();
var booklist = require('../database/books.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/mybook', function(req, res, next) {
  res.render('user/mybook', { title: '书架',books:booklist });
});

module.exports = router;
