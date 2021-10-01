import { FETCH_AGENDA, CREATE_AGENDA, UPDATE_AGENDA, DELETE_AGENDA } from '../constants/actionTypes';
import * as api from '../api/index.js';
    
    export const getAgendas = (id) => async (dispatch) => {
        try {
        const { data } = await api.fetchAgendas(id);
    
        dispatch({ type: FETCH_AGENDA, payload: data });
        } catch (error) {
        console.log(error.message);
        }
    };  

    export const createAgenda = (post) => async (dispatch) => {
        try {
            const { data } = await api.createAgenda(post);

            dispatch({ type: CREATE_AGENDA, payload: data })
        } catch (error) {
            console.log(error);
        }
    }; 

    export const updateAgenda = (id, post) => async (dispatch) => {
        try {
            const { data } = await api.updateAgenda(id, post);

            dispatch({ type: UPDATE_AGENDA, payload: data})
        } catch (error) {
            console.log(error);
        }
    }

    export const deleteAgenda = (id) => async (dispatch) => {
        try {
            await api.deleteAgenda(id);

            dispatch({ type: DELETE_AGENDA, payload: id });
        } catch (error) {
            console.log(error);
        }
    }