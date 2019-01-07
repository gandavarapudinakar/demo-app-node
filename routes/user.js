var express = require('express');
var {user} = require('../models');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function (req, res, next) {
    console.log(req.body);
    user.findByPk(req.params.id).then((user) => {
        if (user) {
            res.json(user);
        } else {
            res.json({message: 'user not found'});
        }
    }).catch(() => res.json({message: 'something wrong'}));
});

// Update user
router.put("/", function (req, res, next) {
    user.findByPk(req.body.id).then(() => {
        user.update(req.body, {where: {id: req.body.id}}).then((user) => {
            if (user[0] > 0) {
                res.json({message: 'success'});
            } else {
                res.json({message: 'user not found'});
            }

        }).catch((e) => {
            console.log(e);
            res.json({message: "something wrong"})
        });
    }).catch((e) => {
        console.log(e);
        res.json({message: "something wrong"})
    })


});

// delete user
router.delete("/:id", function (req,res, next) {
    user.findByPk(req.params.id).then((user)=>{
        user.destroy().then(()=>{
            res.json({message: "success"})
        }).catch({message: "something wrong"})


    }).catch({message: "something wrong"})

});
module.exports = router;
