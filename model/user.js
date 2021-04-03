const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userNumber: String,
    userType: String,
    firstName: String,
    familyName: String,
    email: String,
    potrait: Buffer
},{timestamps: true});

const User = mongoose.model('User',userSchema);
module.exports = User;