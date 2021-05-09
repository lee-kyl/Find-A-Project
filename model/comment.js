const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    post: {
        type:Schema.Types.ObjectId,
        ref:"Post"
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    content:{
        type: String,
        required: true
    },
    reply: [ this ]
});

const Comment = commentSchema.model('Comment',commentSchema);
module.exports = Comment;