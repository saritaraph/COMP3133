var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// middleware
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// default GET route
router.get('/', function(req, res, next) {
  res.send('POST received!');
});

// POST route
router.post('/', function(req, res) {
  console.log('POST data received:');
  console.log(req.body);

  res.send('POST received!');
});

module.exports = router;