const Post = require('../model/post.js');
const Discussion = require('../model/discussion.js');
const Project = require('../model/project.js');
const TeamUp = require('../model/teamup.js');
const User = require('../model/user.js');

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createPost = async (req, res) => {
    const { type } = req.body;
    const { id } = req.params;
    const user = new User();
    try {
        user = User.findById(id);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    switch (type) {
        case "Discussion":
            const { tag } = req.body;
            const newDiscussion = new Discussion({ tag });
            try {
                newDiscussion.save((err) => {
                    if (err) return handleError(err);
                    const { title,content,type } = req.body;
                    const newPost = new Post({ author:user._id, title, content, type, addition: newDiscussion._id});
                    newPost.save();
                });
                res.status(201).json(newPost); 
            } catch (error) {
                res.status(409).json({ message:error.message });
            }
            
            break;
        case "Project":
            const { school,major,slot } = req.body;
            const newProject = new Project({ school,major,availability:true,slot });
            try {
                newProject.save((err) => {
                    if (err) return handleError(err);
                    const { title,content,type } = req.body;
                    const newPost = new Post({ author:user._id, title, content, type, addition: newProject._id});
                    newPost.save();
                });
                res.status(201).json(newPost); 
            } catch (error) {
                res.status(409).json({ message:error.message });
            }
            break;
        case "TeamUp":
            const { team } = req.body;
            const newTeamUp = new TeamUp({ team, availability:true });
            try {
                newTeamUp.save((err) => {
                    if (err) return handleError(err);
                    const { title,content,type } = req.body;
                    const newPost = new Post({ author: user._id, title, content, type, addition: newTeamUp._id});
                    newPost.save();
                });
                res.status(201).json(newPost); 
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
    try {
        const post = await Post.findById(id);
        const { type } = post;
        
        if(type){
            const fullPost = {};
            switch (type) {
                case "Discussion":
                    fullPost = post.populate('Discussion').execPopulate();
                    res.status(200).json(fullPost);
                    break;
                case "Project":
                    fullPost = post.populate('Project').execPopulate();
                    res.status(200).json(fullPost);
                    break;
                case "TeamUp":
                    fullPost = post.populate('TeamUp').execPopulate();
                    res.status(200).json(fullPost);
                    break;
                default:
                    break;
            }
        }
        
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
                Post.findByIdAndUpdate(id, { content },{ new:true });
                break;
            case "Project":
                Post.findByIdAndUpdate(id, { content, availability, slot },{ new:true});
                break;
            case "TeamUp":
                Post.findByIdAndUpdate(id, { availability },{ new:true });
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
        Post.findByIdAndDelete(id);
        res.status(200).json({ message: res.message });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = { getPost, getPosts, createPost, modifyPost, deletePost };