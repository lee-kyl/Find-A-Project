import { combineReducers } from 'redux';
import authReducer from './auth.js';
import profileData from './profile.js';
import postData from './post.js';


export default combineReducers({
    authReducer,
    profileData,
    postData
});