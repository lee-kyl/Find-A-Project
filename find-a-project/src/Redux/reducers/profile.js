import { LOADPROFILE,MODPROFILE } from '../../constant/actionType';

const profileReducer = ( state = {profileData: null}, action) => {
    switch (action.type) {
        case LOADPROFILE:
            return {...state, profileData:JSON.parse(action?.payload)};
        case MODPROFILE:
            break;  
        default:
            return state;
    }
}

export default profileReducer;