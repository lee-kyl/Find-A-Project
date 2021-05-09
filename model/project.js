const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    school:{
        type: String,
        required: true
    },
    major:{
        type: String,
        required:true
    },
    availability:Boolean,
    slot: {
        type: Number,
        required: true
    }
},{ timestamps: true });

const Project = mongoose.model('Project',projectSchema);

module.exports = Project; 