const Application = require('../model/application.js');
const mongoose = require('mongoose');
const Post = require('../model/post.js');
const Team = require('../model/team.js');

const createApplication = async (req, res) => {
    const { id } = req.params;
    const userId = req.UserId;
    try {
        const teamInfo = await Team.findOne({ members: userId });
        const projectInfo = await Post.findById(id);
        if(teamInfo && projectInfo.additon.project){
            const newApplication = new Application({ project: projectInfo._id, isapproved: false, isread: false, team: teamInfo._id, isrejected: false })
            await newApplication.save();
            res.status(201).json(newApplication);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getApplications = async (req, res) => {
    const userId = req.UserId;
    try {
        const teamInfo = await Team.findOne({ members: userId });
        const allApp = [];
        if(teamInfo){
            const applications = await Application.findOne({ team: teamInfo._id });     
            for (let i = 0; i < applications.length; i++) {
                allApp.push(applications[i]);
            }
        }
        res.status(200).json(allApp);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

const deleteApplication = async (req, res) => {
    const userId = req.UserId;
    try {
        const teamInfo = await Team.findOns({ members: userId });
        if(teamInfo){
            await Application.findOneAndDelete(teamInfo._id);
        }
        res.status(200).send({ message: "application deleted" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = { createApplication, getApplications, deleteApplication };