const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createApplication, getApplications, deleteApplication} = require('../controller/application.js');

router.get('/getApplication', auth, getApplications );
router.post('/createApplication', auth, createApplication);
router.delete('/deleteApplication', auth, deleteApplication);

module.exports = router;

