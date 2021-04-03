const express = require('express');
const router = express.router;
const user = require('../model/user');

router.post(
    '/showUsers/',
    (req, res) =>{ 
        user.find({}).then(result => {
            res.status(200).json(result);
        }).catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    });