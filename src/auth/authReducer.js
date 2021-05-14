import {types} from "../types/types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                ...action.payload,
                logged: true,
            }
        case types.LOGOUT:
            return {
                ...state,
                logged:false,
                name:''
            }
        default:
            return state;
    }
}