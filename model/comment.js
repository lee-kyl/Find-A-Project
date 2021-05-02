const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    post:{
        type:Schema.Types.ObjectId,
        ref:"Post",
        required: true
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    replier:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    content:{
        type: String,
        required: true
    }
});

const Comment = commentSchema.model('Comment',commentSchema);
module.exports = Comment;