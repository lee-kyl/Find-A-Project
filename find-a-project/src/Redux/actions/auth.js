import { USER_SIGN_UP, USER_SIGN_IN, LOGOUT } from '../../constant/actionType.js';
import * as api from '../../api/index.js';

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: USER_SIGN_UP, payload:data });
        history.push('/Setting');  
    } catch (error) {
        console.log(error);
    }
}

export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        dispatch({ type: USER_SIGN_IN, payload:data });
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const logout = (history) => async (dispatch) => {
    try {
        dispatch({ type: LOGOUT }, null);
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}


