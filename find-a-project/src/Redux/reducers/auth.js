import { USER_SIGN_IN, USER_SIGN_UP, LOGOUT } from '../../constant/actionType.js';

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case USER_SIGN_IN:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data}));
            return { ...state, authData: action?.data};
        case USER_SIGN_UP:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data}));
            return { ...state, authData: action?.data};
        case LOGOUT:
            localStorage.clear();
            return { ...state, authData: null};
        default:
            return state;
    }
};

export default authReducer;