<<<<<<< HEAD

var express = require('express');
var router = express.Router();
var app = express();

var os = require('os');
var url = require('url');
var mqtt = require('mqtt');
var http = require('http');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index1', { title1: 'Smart Hospital' });


=======
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title1: 'Smart Hospital' });
>>>>>>> e49409757fd0378a575563fef980903abf1bb3e4
});

router.get('/home', function(req, res, next) {
  res.render('home', { title1: 'Advance Integrated Tech Lab' });
});

<<<<<<< HEAD
// Parse
var mqtt_url = url.parse(process.env.CLOUDMQTT_URL || 'mqtt://localhost:1883');
var auth = (mqtt_url.auth || ':').split(':');


router.post('/ledon', function(req, res) {

  console.log("LED on post Called...");


  var client = mqtt.connect(mqtt_url.port, mqtt_url.hostname, {
    username: auth[0],
    password: auth[1]
  });

  var desired = {led : true};
  client.on('connect', function() {
    client.publish('/hub/control',desired, function() {
      client.end();
      res.writeHead(204, { 'Connection': 'keep-alive' });
      res.end();
    });
  });

  /**/
});

router.post('/ledoff', function(req, res) {

  console.log("LED off post Called...");


  var client = mqtt.connect(mqtt_url.port, mqtt_url.hostname, {
    username: auth[0],
    password: auth[1]
  });

  var desired = {led : false};
  client.on('connect', function() {
    client.publish('/hub/control', desired, function() {
      client.end();
      res.writeHead(204, { 'Connection': 'keep-alive' });
      res.end();
    });
  });

  /**/

});



=======
>>>>>>> e49409757fd0378a575563fef980903abf1bb3e4
module.exports = router;
