const Team = require('../model/team');

const getTeam = async (req, res) => {
    //this id is user's _id in localstorage
    const { userId } = req.body;
    try {
        const team = await Team.findOne({ members: userId });
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({ message:error.message });
    }
}

const createTeam = async (req, res) => {
    const { id } = req.body.userId;
    const { teamName } = req.body;
    try {
        const team = new Team({teamName, $push:{ members:id }});
        team.save();
        res.status(201).json(team);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateTeam = async (req, res) => {
    //this id is team's _id which retrieved and saved in page
    const { id } = req.params;
    const { userId } = req.body;
    try {
        Team.findByIdAndUpdate(id, {$push:{ member: userId }});
    } catch (error) {
        res.status(404).json({ message:error.message });
    }

}