import { LOADTEAM,UPDATETEAM,GETTEAM } from '../../constant/actionType';
import * as api from '../../api/index';

export const loadTeam = (id) => async (dispatch) => {
   try {
      const { data } = await api.loadTeam(id);
      dispatch({ type: LOADTEAM, payload: data});
   } catch (error) {
      console.log(error);
   }
   
}

export const updateTeam = (id,formData) => async (dispatch) => {
   try {
      const { data } = await api.updateTeam(id,formData);
      dispatch({ type:UPDATETEAM, payload:data});
   } catch (error) {
      console.log(error);
   }
}

export const getTeam = (id) => async (dispatch) => {
   try {
      const { data } = await api.getTeam(id);
      dispatch({ type:GETTEAM, payload:data});
   } catch (error) {
      console.log(error);
   }
}