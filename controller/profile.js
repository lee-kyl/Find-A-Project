const Profile = require('../model/profile.js');
const User = require('../model/user.js');
const mongoose = require('mongoose');

const createProfile = async (req, res) => {
    const { userId, school, major, tag, selfintro, skill, team  } = req.body;
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
    const { userId, school, major, tag, selfintro, skill, team  } = req.body;
    try {
       const user = await User.findById(userId);
       const { profile } = user;
       await Profile.findByIdAndUpdate(profile,{school, major, tag, selfintro, skill, team});
       res.status(200).send({ message: "profile updated" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = { createProfile, getProfile, updateProfile };