const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getPosts, getPost, createPost, modifyPost, deletePost } = require('../controller/post.js');


router.get('/getPosts', getPosts);
router.post('/getPost', auth, getPost); 
router.post('/createPost', auth, createPost);
router.post('/modifyPost', auth, modifyPost);
router.post('/deletePost', auth, deletePost);

module.exports = router;