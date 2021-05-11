import { LOADPROFILE }  from '../../constant/actionType';
import * as api from '../../api/index.js';

export const loadProfile = (userId) => async (dispatch) => {
    try {
        const { data } = await api.loadProfile(userId);
        dispatch({ type:LOADPROFILE, payload:data});
    } catch (error) {
        console.log(error);
    }
}