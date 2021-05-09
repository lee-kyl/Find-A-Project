const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const discussionSchema = new Schema({
    tag: {
        type:String,
        required: true
    }
});

const Discussion = mongoose.model("Discussion",discussionSchema);

module.exports = Discussion;