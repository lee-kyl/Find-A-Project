const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    schoolID: {
        type: String, 
        required:true
    },
    userType: {
        type: String, 
        enum: ['student','staff'], 
        required:true
    },
    firstName: {
        type:String, 
        required:true
    },
    lastName: {
        type:String, 
        required:true
    },
    email: {
        type:String, 
        required:true
    },
    password: {
        type: String, 
        required:true
    },
    potrait: {
        type:Buffer
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref:"Profile"
    }
},{timestamps: true});

const User = mongoose.model('User',userSchema);
module.exports = User;