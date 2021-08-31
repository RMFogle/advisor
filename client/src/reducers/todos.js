/* eslint-disable import/no-anonymous-default-export */
import { FETCH_TASK, CREATE_TASK, DELETE_TASK, UPDATE_TASK, CHECK_TASK } from "../constants/actionTypes";
    export default (todos = [], action) => {
        switch (action.type) {
            case DELETE_TASK:
                return todos.filter((check) => check._id !== action.payload);
            case UPDATE_TASK:
                return todos.map((check) => check._id === action.payload._id ? action.payload : check);
            case FETCH_TASK:
                return action.payload;
            case CREATE_TASK:
                return [ ...todos, action.payload];
            case CHECK_TASK:
                return todos.map((check) => check._id === action.payload._id ? action.payload : check);
            default:
                return todos;
        }
    };