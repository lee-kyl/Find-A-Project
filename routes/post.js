const express = require('express');
const router = express.Router();
const user = require('../model/user');

router.get('/showUsers',
    (req, res) => {
        user.find()
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            console.log(err);
        })
    });

router.post('/saveSampleUser', (req, res) => {
    newUser = new user ({
        userNumber: '33333333',
        userType: 'Student',
        firstName: 'Kun',
        familyName: 'young',
        email: 'a@d.com',
        potrait: null
    }),
    newUser.save()
        .then(() => {
            res.status(200).send('User Created');
        })
        .catch(err => {
            res.status(500).send('Unable to create');
            console.log(err);
        })
});

module.exports = router;