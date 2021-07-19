import * as api from '../api';
    
    export const getBreaks = () => async (dispatch) => {
        try {
        const { data } = await api.fetchBreaks();
    
        dispatch({ type: 'FETCH_ALL', payload: data });
        } catch (error) {
        console.log(error.message);
        }
    };  

    export const createBreak = (post) => async (dispatch) => {
        try {
            const { data } = await api.createBreak(post);

            dispatch({ type: 'CREATE', payload: data })
        } catch (error) {
            console.log(error);
        }
    }; 

    export const updateBreak = (id, post) => async (dispatch) => {
        try {
            const { data } = await api.updateBreak(id, post);

            dispatch({ type: 'UPDATE', payload: data})
        } catch (error) {
            console.log(error);
        }
    }

    export const deleteBreak = (id) => async (dispatch) => {
        try {
            await api.deleteBreak(id);

            dispatch({ type: 'DELETE', payload: id });
        } catch (error) {
            console.log(error);
        }
    }