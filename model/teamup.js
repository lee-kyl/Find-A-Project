const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamUpSchema = new Schema({
    team: {
        type: String,
        required: true
    },
    availability: {
        type: Boolean
    }
});

const TeamUp = mongoose.model("TeamUp", teamUpSchema);
module.exports = TeamUp;
