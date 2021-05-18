const Post = require('../model/post.js');
const Discussion = require('../model/discussion.js');
const Project = require('../model/project.js');
const TeamUp = require('../model/teamup.js');
const User = require('../model/user.js');
const mongoose = require('mongoose');
const Comment = require('../model/comment.js');
const Team = require('../model/team.js');

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        const fullPosts = [];
        for (let i = 0; i < posts.length; i++) {
            let fullPost = {};
            fullPost = await posts[i].populate("addition").execPopulate();
            fullPost = await posts[i].populate("author").execPopulate();
            fullPosts.push(fullPost);
        }
        fullPosts.reverse();
        res.status(200).json(fullPosts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createPost = async (req, res) => {
        // const userId = req.UserId;
        const { id } = req.params;
        const userID = id;
        const { type } = req.body;
    let user = {};
    try {
       user = await User.findById(userID);
    } catch (error) {
       res.status(404).json({ message: error.message });
    }
    switch (type) {
        case "Discussion":
            const { tag } = req.body;
            const newDiscussion = new Discussion({ _id:new mongoose.Types.ObjectId(), tag });
            try {
                newDiscussion.save(async (err) => {
                    if (err) return handleError(err);
                    const { title,content,type } = req.body;
                    const newPost = new Post({ author:user._id, title, content, type, addition: newDiscussion._id});
                    await newPost.save();
                    res.status(201).json(newPost); 
                });    
            } catch (error) {
                res.status(409).json({ message:error.message });
            }
            break;
        case "Project":
            const { school,major,slot } = req.body;
            const newProject = new Project({ _id:new mongoose.Types.ObjectId(),school,major,availability:true,slot });
            try {
                newProject.save(async (err) => {
                    if (err) return handleError(err);
                    const { title,content,type } = req.body;
                    const newPost = new Post({ author:user._id, title, content, type, addition: newProject._id});
                    await newPost.save();
                    res.status(201).json(newPost); 
                });
                
            } catch (error) {
                res.status(409).json({ message:error.message });
            }
            break;
        case "TeamUp":
            const { team } = req.body;
            const newTeamUp = new TeamUp({ _id:new mongoose.Types.ObjectId(),team, availability:true });
            try {
                newTeamUp.save(async (err) => {
                    if (err) return handleError(err);
                    const { title,content,type } = req.body;
                    const newPost = new Post({ _id:new mongoose.Types.ObjectId(), author: user._id, title, content, type, addition: newTeamUp._id});
                    const newTeam = new Team({teamName:team, members:[user._id], teamuppost: newPost._id });
                    await newTeam.save();
                    await newPost.save();
                    res.status(201).json(newPost); 
                });               
            } catch (error) {
                res.status(409).json({ message:error.message });
            }
            break;          
        default:
            break;
    }
}

const getPost = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const post = await Post.findById(id);
        let fullPost = await post.populate("addition").populate("author").execPopulate();
        const comments = await Comment.find({ postId: id }).populate("author");
        let commentsArray = []
        //fullPost = await post.populate("author").execPopulate();
        //ullPost = await post.populate({path:"comments.[0]"}).execPopulate();
        for(let i = 0; i < comments.length; i++){
            commentsArray.push(comments[i]);
        }
        console.log(commentsArray);
        //fullPost = await fullPost.comments.populate("author").execPopulate(); 

        fullPost.comments = commentsArray;
        //console.log(fullPost);
        res.status(200).json(fullPost);
    } catch (error) {
        res.status(404).json({ message:error.message });
    }
}

const modifyPost = async (req, res) => {
    const { id } = req.params;
    const { type, content, availability } = req.body;
    try {
        switch (type) {
            case "Discussion":
                await Post.findByIdAndUpdate(id, { content },{ new:true }).populate("addition");
                break;
            case "Project":
                await Post.findByIdAndUpdate(id, { content, availability, slot },{ new:true}).populate("addition");
                break;
            case "TeamUp":
                await Post.findByIdAndUpdate(id, { availability },{ new:true }).populate("addition");
            default:
                break;
        }
        res.status(200).json({ message: res.message });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    
}

const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        await Post.findByIdAndDelete(id);
        res.status(200).json({ message: res.message });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = { getPost, getPosts, createPost, modifyPost, deletePost };