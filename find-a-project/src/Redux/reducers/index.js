import { combineReducers } from 'redux';
import authReducer from './auth.js';
import profileReducer from './profile.js';


export default combineReducers({
    authReducer,
    profileReducer
});