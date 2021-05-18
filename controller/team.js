const Team = require('../model/team');

const getTeam = async (req, res) => {
    //this id is user's _id in localstorage
    const { id } = req.params;
    try {
        const team = await Team.findOne({ members: id }).populate('members');
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({ message:error.message });
    }
}

const loadTeam = async (req, res) => {
    const { id } = req.params;
    try {
        const team = await Team.findOne({ teamuppost: id }).populate('members');
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({ message:error.message });
    }
}

const createTeam = async (req, res) => {
    //const { id } = req.userId;
    const { teamName, userId } = req.body;
    try {
        const team = new Team({teamName, $push:{ members:userId }});
        await team.save();
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
        await Team.findOneAndUpdate({ teamuppost: id }, {$push:{ members: userId }});
        const team = await Team.findOne({ teamuppost: id }).populate('members');
        console.log(team);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({ message:error.message });
    }

}

const leaveTeam = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.userId;
    try {
        await Team.findByIdAndUpdate(id, {$pull:{ member: userId }});
        res.status(200).send({ message: "Operation LeaveTeam is done" });
    } catch (error) {
        res.status(404).json({ message:error.message });
    }
}

const deleteTeam = async (req, res) => {
    const { id } = req.params;
    try {
        await Team.findByIdAndDelete(id);
        res.status(200).send({ message: "Operation DeleteTeam is done"});
    } catch (error) {
        res.status(404).json({ message:error.message });
    }
}

const superviseTeam = async (req, res) => {
    const { id } = req.params;
    const userId = req.userId;
    try {
       await Team.findByIdAndUpdate(id, {supervisor:userId});
    } catch (error) {
        res.status(404).json({ message:error.message });
    }
}

module.exports = { createTeam, getTeam, updateTeam, leaveTeam, deleteTeam, superviseTeam, loadTeam };