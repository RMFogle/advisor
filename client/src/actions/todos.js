import { FETCH_TASK, CREATE_TASK, UPDATE_TASK, DELETE_TASK, CHECK_TASK } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getTodos = (id) => async (dispatch) => {
    try {
    const { data } = await api.fetchTodos(id);

    dispatch({ type: FETCH_TASK, payload: data });
    } catch (error) {
    console.log(error.message);
    }
};  

export const createTodo = (check) => async (dispatch) => {
    try {
        const { data } = await api.createTodo(check);

        dispatch({ type: CREATE_TASK, payload: data })
    } catch (error) {
        console.log(error);
    }
}; 

export const updateTodo = (id, check) => async (dispatch) => {
    try {
        const { data } = await api.updateTodo(id, check);

        dispatch({ type: UPDATE_TASK, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        await api.deleteTodo(id);

        dispatch({ type: DELETE_TASK, payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const checkTask = (id) => async (dispatch) => {
    try {
        const { data } = await api.checkTask(id);

        dispatch({ type: CHECK_TASK, payload: data})
    } catch (error) {
        console.log(error);
    }
}