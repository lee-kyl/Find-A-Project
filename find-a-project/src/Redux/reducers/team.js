import { LOADTEAM,UPDATETEAM,GETTEAM } from '../../constant/actionType';

const initState = {
    teamName:"N/A",
    members:[],
    teamuppost:"N/A",
    supervisor:"N/A" 
}

const teamData = (state = { team: initState}, action) => {
    switch (action.type) {
        case LOADTEAM:
            return {...state, team: action?.payload};
        case UPDATETEAM:
            return {...state, team: action?.payload};
        case GETTEAM:
            return {...state, team: action?.payload};
        default:
            return state;
    }
}

export default teamData;