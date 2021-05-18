const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createComment,getComments,deleteComment } = require('../controller/comment.js');


router.get('/getComments/:id',getComments);
router.delete('/deleteComment/:id',deleteComment);
router.post('/createComment/',createComment);

module.exports = router;