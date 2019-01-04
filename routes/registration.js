var express = require('express');
var router = express.Router();
var {user}=require('../models/')
var sequelizer = require('sequelize');
router.post('/',   function (req, res, next) {
    user.create(req.body).then(user =>
        res.json(user)
    );




});
module.exports=router;