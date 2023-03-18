import { EDU } from "../constants/actionTypes";

const educationInfoReducer = (state = EDU, action) => {
  switch (action.type) {
    case EDU:
      console.log(state, action.payload);
      //   localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return action.payload;
    default:
      return state; // always needs to return something
  }
};

export default educationInfoReducer;
