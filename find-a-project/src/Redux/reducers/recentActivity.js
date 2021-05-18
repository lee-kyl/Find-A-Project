import { LOADCOMMENT } from '../../constant/actionType';

const initState = [{
    content:"N/A",
    createdAt:"N/A"
}]

const activitiesData = (state = {activities: initState}, action ) => {
    switch (action.type) {
        case LOADCOMMENT:
            return {...state, activities:action?.payload};
        default:
            return state;
    }
}

export default activitiesData;