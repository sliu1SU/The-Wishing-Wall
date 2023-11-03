var express = require('express');
var router = express.Router();

/* GET home page. */
// this is the access point of our website
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome Welcome!' });
});

module.exports = router;
