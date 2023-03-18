import { AUTH, EDU } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    console.log(data);

    dispatch({ type: AUTH, data });

    history("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });
    history("/");
  } catch (error) {
    console.log(error);
  }
};

export const educationInfo = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.educationInfo(formData);

    dispatch({ type: EDU, data });
    history("/");
  } catch (error) {
    console.log(error);
  }
};
