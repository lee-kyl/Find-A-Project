import { LOADPROFILE,MODPROFILE,CHANGESKILLS } from '../../constant/actionType';

const initialState = {
    schoolID: "0",
    userType: "unknown",
    firstName: "unknown",
    lastName: "unknown",
    email: "unknown",
    potrait: null,
    profile:{
        school:"unknown",
        major:"unknown",
        selfintro:"unknown",
        skills:["unknown"],
        team:{
            teamName:"unknown",
            members:[{ firstName:"unknown",lastName:"unknown" }]
        }
    }
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