import { LOADPOST, DELETECOMMENT,CREATECOMMENT } from '../../constant/actionType';
import * as api from '../../api/index';

export const loadPost = (postId) => async (dispatch) => {
    try {
        const { data } = await api.loadPost(postId);
        
        dispatch({ type: LOADPOST, payload: data});
    } catch(error) {
        console.log(error);
    }
}

export const deleteComment = (id,postId) => async (dispatch) => {
    try {
        await api.deleteComment(id);
        const { data } = await api.loadPost(postId);
        dispatch({ type: DELETECOMMENT, payload:data });   
    } catch (error) {
        console.log(error);
    }
 
}

export const createComment = (formData,postId) => async (dispatch) => {
    try {
        console.log(formData);
        console.log(postId);
        await api.createComment(formData);
        const { data } = await api.loadPost(postId);
        console.log(data);
        dispatch({ type: CREATECOMMENT, payload: data });
    } catch (error) {
        console.log(error);
    }
}