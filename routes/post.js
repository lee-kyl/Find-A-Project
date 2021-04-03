const express = require('express');
const router = express.Router();
const user = require('../model/user');

router.get('/showUsers',
    (req, res) => {
        user.find()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
    });

module.exports = router;