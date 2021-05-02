const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    team:{
        type: Schema.Types.ObjectId,
        ref:"Team",
        required: true
    },
    isaccept:{
        type: Boolean,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    targetmember:{
        type: Schema.Types.ObjectId,
        ref:"User"
    }
});

const Request = requestSchema.model('Request',requestSchema);
module.exports = Request;