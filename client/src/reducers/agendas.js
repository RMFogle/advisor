/* eslint-disable import/no-anonymous-default-export */
import { FETCH_AGENDA, CREATE_AGENDA, UPDATE_AGENDA, DELETE_AGENDA } from "../constants/actionTypes";
    export default (agendas = [], action) => {
        switch (action.type) {
            case DELETE_AGENDA:
                return agendas.filter((post) => post._id !== action.payload);
            case UPDATE_AGENDA:
                return agendas.map((post) => post._id === action.payload._id ? action.payload : post);
            case FETCH_AGENDA:
                return action.payload;
            case CREATE_AGENDA:
                return [ ...agendas, action.payload];
            default:
                return agendas;
        }
    };