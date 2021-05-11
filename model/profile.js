const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    school:{
        type:String,
        required:true
    },
    major:{
        type:String,
        required:true
    },
    selfintro: String,
    skill:[{
        type:String
    }],
    team:{
        type:Schema.Types.ObjectId,
        ref:"Team"
    }
});

const Profile = mongoose.model('Profile',profileSchema);

module.exports = Profile;