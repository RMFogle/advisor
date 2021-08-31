import { FETCH_BREAK, CREATE_BREAK, UPDATE_BREAK, DELETE_BREAK } from '../constants/actionTypes';
import * as api from '../api/index.js';
    
    export const getBreaks = (id) => async (dispatch) => {
        try {
        const { data } = await api.fetchBreaks(id);
    
        dispatch({ type: FETCH_BREAK, payload: data });
        } catch (error) {
        console.log(error.message);
        }
    };  

    export const createBreak = (post) => async (dispatch) => {
        try {
            const { data } = await api.createBreak(post);

            dispatch({ type: CREATE_BREAK, payload: data })
        } catch (error) {
            console.log(error);
        }
    }; 

    export const updateBreak = (id, post) => async (dispatch) => {
        try {
            const { data } = await api.updateBreak(id, post);

            dispatch({ type: UPDATE_BREAK, payload: data})
        } catch (error) {
            console.log(error);
        }
    }

    export const deleteBreak = (id) => async (dispatch) => {
        try {
            await api.deleteBreak(id);

            dispatch({ type: DELETE_BREAK, payload: id });
        } catch (error) {
            console.log(error);
        }
    }