import axios from 'axios';

const url = 'http://localhost:5000/breaks';

export const fetchBreaks = () => axios.get(url);
export const createBreak = (newBreak) => axios.post(url, newBreak);
export const updateBreak = (id, updatedBreak) => axios.patch(`${url}/${id}`, updatedBreak);
export const deleteBreak = (id) => axios.delete(`${url}/${id}`);

export const addItems = (id) => axios.patch(`${url}/posts/${id}/addItems`);

const altURL = 'http://localhost:5000/todos';

export const fetchTodos = () => axios.get(altURL);
export const createTodo = (newTodo) => axios.post(altURL, newTodo);
export const updateTodo = (id, updatedTodo) => axios.patch(`${altURL}/${id}`, updatedTodo);
export const deleteTodo = (id) => axios.delete(`${altURL}/${id}`);
export const checkTask = (id) => axios.patch(`${altURL}/${id}/checkTask`);


