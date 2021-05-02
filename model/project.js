const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    supervisor: {
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    school:{
        type: String,
        required: true
    },
    major:{
        type: String,
        required:true
    },
    content:{
        type: String,
        required:true
    },
    availability:Boolean,
    slot: {
        type: integer,
        required: true
    }
});

const Project = projectSchema.model('Project',projectSchema);

module.exports = Project; 