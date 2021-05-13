const Comment = require('../model/comment.js');
const Post = require('../model/post.js');
const mongoose = require('mongoose');

const getComments = async (req, res) => {
    //this is to get comments sended by a user, whole commentlist will load with Post
    try {
        const userId = req.UserId;
        const comments = await Comment.findOne({author:userId});
        res.status(200).json(comments);
    } catch (error) {
        res.status(404).json({ message:error.message });
    }
}

const createComment = async (req, res) => {
    try {
        //const userId = req.UserId;
        //const { id } = req.params;
        const { content, userId, id } = req.body;
        const newComment = new Comment({ _id:new mongoose.Types.ObjectId(), postId: id ,author: userId, content:content });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(409).json({ message:error.message });
    }
}

const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        await Comment.findByIdAndDelete(id);
        res.status(200).json({ message: "comment has been deleted" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = { getComments, createComment, deleteComment };