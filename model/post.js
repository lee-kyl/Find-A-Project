const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum:["Discussion","Project","TeamUp"],
        required: true
    },
    addition: {
        type: Schema.Types.ObjectId,
        required: true,
        refPath: 'type'
    },
},{ timestamps: true});

const Post = mongoose.model('Post',postSchema);
module.exports = Post;




