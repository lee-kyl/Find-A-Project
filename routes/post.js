const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getPosts, getPost, createPost, modifyPost, deletePost } = require('../controller/post.js');

//TODO put back auth middleware if everything tested well

router.get('/getPosts', getPosts);
router.get('/getPost/:id', getPost); 
router.post('/createPost', auth, createPost);
router.post('/modifyPost', auth, modifyPost);
router.delete('/deletePost', auth, deletePost);

module.exports = router;