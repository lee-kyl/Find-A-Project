import { combineReducers } from 'redux';
import authReducer from './auth.js';
import profileData from './profile.js';
import postData from './post.js';
import teamData from './team.js';
import activitiesData from './recentActivity.js';


export default combineReducers({
    authReducer,
    profileData,
    postData,
    teamData,
    activitiesData
});