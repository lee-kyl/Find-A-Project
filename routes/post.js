const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getPosts, getPost, createPost, modifyPost, deletePost } = require('../controller/post.js');

//TODO put back auth middleware if everything tested well

router.get('/getPosts', getPosts);
router.get('/getPost/:id', getPost); 
router.post('/createPost', createPost);
router.post('/modifyPost', modifyPost);
router.post('/deletePost', deletePost);

module.exports = router;