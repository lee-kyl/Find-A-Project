const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    teamName: String,
    members:[{
       type: Schema.Types.ObjectId,
       required: true,
       ref: "User",
    }],
    teamuppost:{
        type: Schema.Types.ObjectId,
        ref: "TeamUp"
    },
    supervisor:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps:true});


const Team = mongoose.model('Team',teamSchema);
module.exports = Team;

