const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    project:{
        type: Schema.Types.ObjectId,
        ref:"Post"
    },
    isapproved:{
        type: Boolean,
        required: true
    },
    isread:{
        type: Boolean,
        required: true
    },
    team:{
        type: Schema.Types.ObjectId,
        ref:"Team",
        required: true
    },
    isrejected:{
        type: Boolean,
        required: true
    },
    comment: String
});

const Application = applicationSchema.model('Application',applicationSchema);
module.exports = Application;