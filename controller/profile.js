const Profile = require('../model/profile.js');
const User = require('../model/user.js');
const mongoose = require('mongoose');

const createProfile = async (req, res) => {
    const userId = req.UserId;
    const { school, major, tag, selfintro, skill, team  } = req.body;
    try {
        const profile = new Profile({ _id: new mongoose.Types.ObjectId, school, major, tag, selfintro, skill, team });
        await profile.save();
        await User.findByIdAndUpdate(userId, {profile: profile._id}); 
        res.status(200).send({ message: "profile created" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getProfile = async (req, res) => {
    const { id } = req.params;
    try {
        const userProfile = await User.findById(id).populate("profile");
        res.status(200).json(userProfile);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const updateProfile = async (req, res) => {
    // const userProfile = { school, major, tag, selfintro, skills, team  };
    try {
        const { id } = req.params;
       const userId = id;
        const { school, major, tag, selfintro, skills, team  } = req.body;
       const user = await User.findById(userId);
       const { profile } = user;
       await Profile.findByIdAndUpdate(profile,{school, major, tag, selfintro, skills, team});
    //    await Profile.findByIdAndUpdate(user, {...user, profile: userProfile});
       res.status(200).send({ message: "profile updated" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const updatePotrait = async (req, res) => {
    const userId = req.UserId;
    const { potrait } = req.body;
    try {
        await User.findByIdAndUpdate(userId, {potrait:potrait});
        res.status(200).send({ message: "potrait updated" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = { createProfile, getProfile, updateProfile, updatePotrait };