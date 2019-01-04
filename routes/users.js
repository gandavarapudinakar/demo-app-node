var express = require('express');
var {user}=require('../models')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    user.findAll().then((users) => {
      res.json(users);
    }).catch(()=>res.json({message:'something went wrong'}));
  })

module.exports = router;
