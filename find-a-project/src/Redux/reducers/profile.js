import { LOADPROFILE,MODPROFILE } from '../../constant/actionType';

const profileReducer = ( state = {profileData: null}, action) => {
    switch (action.type) {
        case LOADPROFILE:
            console.log(action.payload);
            return {...state, profileData:action?.payload};
        case MODPROFILE:
            break;  
        default:
            return state;
    }
}

export default profileReducer;