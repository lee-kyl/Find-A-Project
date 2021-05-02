const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    sender:{
        type: Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    receiver:{
        type: Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    content: {
        type:String,
        required: true
    },
    type:{
        type:String,
        enum:['casual','inquiry'],
        required: true
    }
});

const Message = messageSchema.model('Message',messageSchema);

module.exports = Message;