/* eslint-disable import/no-anonymous-default-export */
import { FETCH_BREAK, CREATE_BREAK, UPDATE_BREAK, DELETE_BREAK } from "../constants/actionTypes";
    export default (breaks = [], action) => {
        switch (action.type) {
            case DELETE_BREAK:
                return breaks.filter((post) => post._id !== action.payload);
            case UPDATE_BREAK:
                return breaks.map((post) => post._id === action.payload._id ? action.payload : post);
            case FETCH_BREAK:
                return action.payload;
            case CREATE_BREAK:
                return [ ...breaks, action.payload];
            default:
                return breaks;
        }
    };