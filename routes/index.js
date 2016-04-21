var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title1: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title1: 'Welcome to AITL home' });
});

module.exports = router;
