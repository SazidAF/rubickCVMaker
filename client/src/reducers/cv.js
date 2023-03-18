import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export const cvreducers = (cvs= [], action) => {

  switch(action.type){
    case UPDATE:
        return cvs.map((cv)=> cv._id === action.payload._id ? action.payload : cvs);
    case DELETE:
      return cvs.filter((cv) => cv._id !== action.payload); 
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...cvs, action.payload];
    default:
      return cvs;
  }
}