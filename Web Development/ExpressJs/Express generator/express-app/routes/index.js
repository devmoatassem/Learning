var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Moatassam-s Express Page', message: "Welcome Moatassem to earn." });
});

module.exports = router;
