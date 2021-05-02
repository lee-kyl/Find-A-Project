const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    content: {
        type: String,
        required: true
    }
});

const Post = mongoose.model('Post',postSchema);
module.exports = Post;




