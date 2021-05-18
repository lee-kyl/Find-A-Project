import { LOADCOMMENT } from '../../constant/actionType';
import * as api from '../../api/index';

export const loadRecent = (id) => async (dispatch) => {
    
    try {
        const { data } = await api.getComments(id);
        if(data !== null){
        dispatch( {type: LOADCOMMENT, payload: data});
        }
    } catch (error) {
        console.log(error);
    }
}