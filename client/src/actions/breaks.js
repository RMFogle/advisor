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
    }