import { USER_SIGN_UP } from '../../constant/actionType.js';
import * as api from '../../api/index.js';

export const signup = (formData, history) => async(dispatch) => {
    try {
    
        history.push('/');  
    } catch (error) {
        
    }
}

export const signin = (formData, history) => (dispatch) => {
    try {
        history.push('/');
    } catch (error) {
        
    }
}