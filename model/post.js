const mongoose = require('mongoose');
const Schema = mongoose.schema
const postSchema = new Schema({
    author: {
        type: Schema.ObjectID,
        ref:"User"
    },
    content: String,
    comment:[{
        user: {
            type: Schema.ObjectID,
            ref:"User"
        },
        content:String,
        reply: [{
            user: {
                type: Schema.ObjectID,
                ref:"User"
            },
            content: String
        },{timestamps: true}]
    },{timestamps:true}]
},{timestamps: true});

const Post = mongoose.model('Post',postSchema);
module.exports = Post;




