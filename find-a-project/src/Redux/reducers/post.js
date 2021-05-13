import { LOADPOST,CREATEPOSTS,DELETECOMMENT,CREATECOMMENT } from '../../constant/actionType';

const initialState={
    _id:"LOADING...",
    author:{ firstName:"LOADING",lastName:"LOADING" },
    title:"LOADING...",
    content:"LOADING...",
    type:"LOADING...",
    addition:{ 
        school:"LOADING...",
        major:"LOADING...",
        availability:true,
        slot:0,
        team:{
            teamName:"LOADING...",
            members:[{ firstName:"LOADING",lastName:"LOADING" }]
        }
    },
    comments:[]
}

const postData = (state = { postData:initialState }, action) => {
    switch (action?.type) {
        case LOADPOST:
        return {...state, postData:action?.payload};
        case CREATEPOSTS:
        return {...state, postData:action?.payload};
        case CREATECOMMENT:
        return { ...state, postData:action?.payload};
        case DELETECOMMENT:
        return {...state, postData:action?.payload};
        default:
        return state;
    }
}

export default postData;