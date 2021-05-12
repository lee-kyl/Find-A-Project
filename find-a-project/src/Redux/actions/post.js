import { LOADPOST } from '../../constant/actionType';
import * as api from '../../api/index';

export const loadPost = (postId) => async (dispatch) => {
    try {
        const { data } = await api.loadPost(postId);
        dispatch({ type: LOADPOST, payload: data});
    } catch(error) {
        console.log(error);
    }
}