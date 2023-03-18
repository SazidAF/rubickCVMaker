import { AUTH, LOGOUT } from '../constants/actionTypes';


const authReducer = (state, action) => {
    switch (action.type) {
        case AUTH:
        case LOGOUT:
        default:
           return null;  // always needs to return something
    }
}

export default authReducer;