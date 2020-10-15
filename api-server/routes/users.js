var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const code = 200
  const data = [
    {fname:'kim',name:'ingee'},
    {fname:'chae',name:'hyochul'},
    {fname:'nam',name:'geumjae'}
  ]
  res.status(code).json(data)
});

module.exports = router;
