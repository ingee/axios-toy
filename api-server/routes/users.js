var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let code = null
  let data = null
  if (false) {
    code = 200
    data = [{fname:'kim',name:'ingee'}, {fname:'chae',name:'hyochul'}, {fname:'nam',name:'geumjae'}]
  } else {
    code = 201
    data = {error:'Some error in server'}
  }
  res.status(code).json(data)
});

module.exports = router;
