const express = require('express');
const router = express.Router();
const { signin, signup } = require('../controller/user.js');

router.post('/signin',signin);
router.post('/signup',signup);

module.exports = router;