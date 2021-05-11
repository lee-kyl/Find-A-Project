const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getProfile, createProfile, updateProfile } = require('../controller/profile.js');

//TODO put back auth middleware if everything tested well

router.get('/getProfile/:id', getProfile);
router.post('/createProfile', createProfile);
router.post('/updateProfile', updateProfile);

module.exports = router;