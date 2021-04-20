const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userNumber: {type: String, required:true},
    userType: {enum:["Student","Staff"], required:true},
    firstName: {type:String, required:true},
    familyName: {type:String, required:true},
    email: {type:String, required:true},
    potrait: {type:Buffer}
},{timestamps: true});

const User = mongoose.model('User',userSchema);
module.exports = User;