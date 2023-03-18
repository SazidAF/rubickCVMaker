import { CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const createCV = (cv) => async (dispatch) => {
  try {
    const { data } = await api.createCV(cv);

    dispatch({
      type: CREATE,
      payload: data
    });
    
  } catch (error) {
    console.log(error);
  }
};


export const updateCV = (id, cv) => async (dispatch) => {
  try {
    const { data } = await api.updateCV(id, cv);

    dispatch({
      type: UPDATE,
      payload: data
    });
  } catch (error) {
    console.log(error);
    
  }
};


export const deleteCV = (id) => async (dispatch) => {
  try {
    await api.deleteCV(id);

    dispatch({
      type: DELETE,
      payload: id
    });
  } catch (error) {
    console.log(error);
  }
}
