var express = require('express');
var router = express.Router();

// redirecet to flights page since index view shows nothing
router.get('/', function(req, res) {
  res.redirect('/flights')
});

module.exports = router;
