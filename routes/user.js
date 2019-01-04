var express = require('express');
var {user}=require('../models')
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    user.findByPk(req.params.id).then((user) => {
        if(user) {
            res.json(user);
        }else {
            res.json({message:'user not found'});
        }
    }).catch(()=>res.json({message:'something wrong'}));
})

module.exports = router;
