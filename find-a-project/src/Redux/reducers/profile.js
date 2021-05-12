import { LOADPROFILE,MODPROFILE } from '../../constant/actionType';

const initialState = {
    "userNumber": "0",
    "userType": "unknown",
    "firstName": "unknown",
    "lastName": "unknown",
    "email": "unknown",
    "potrait": null,
    "addition":{}
}


const profileData = ( state = { userProfile:initialState }, action) => {
    switch (action.type) {
        case LOADPROFILE:
            console.log(action.payload);
            return {...state, userProfile:action?.payload};
        case MODPROFILE:
            break;  
        default:
            return state;
    }
}

export default profileData;