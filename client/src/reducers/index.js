import { combineReducers } from "redux";

import auth from "./auth";
import educationInfoReducer from "./education_info";
export default combineReducers({
  auth,
  educationInfoReducer,
});
