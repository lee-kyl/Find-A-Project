const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createTeam, getTeam, updateTeam, leaveTeam, deleteTeam, superviseTeam } = require('../controller/team.js');

//TODO put back auth middleware if everything tested well

router.get('/getTeam', getTeam);
router.post('/createTeam', createTeam);
router.post('/updateTeam', updateTeam);
router.post('/leaveTeam', leaveTeam);
router.post('/superviseTeam', superviseTeam);
router.post('/deleteTeam', deleteTeam);

module.exports = router;