const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    teamName: String,
    members:[{
       type: Schema.ObjectId,
       required: true,
       ref: "User"
    }],
    supervisor:{
        type: Schema.ObjectId,
        required: true,
        ref: "User"
    }
},{timestamps:true});

const Team = mongoose.model('Team',teamSchema);
module.exports = Team;

