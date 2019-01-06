var express = require('express');
var router = express.Router();
var {user} = require('../models/');
router.post('/',  async function (req, res, next) {
try {


    const user1 = await user.create(req.body);
    res.json({message: 'success',user:user1});

}catch (e) {
    res.json({message: 'email already exist'})
}


});
module.exports=router;