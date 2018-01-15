var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('books.js GET /');
  // res.send('respond with a resource');
  res.json([{
    title: "book no. 1",
    author: "author no. 1"
  }, {
    title: "book no. 2" ,
    author: "author no. 2"
  }]);
});

module.exports = router;
