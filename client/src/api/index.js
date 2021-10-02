import axios from 'axios';

const url = 'https://still-bastion-09694.herokuapp.com/agendas';

export const fetchAgendas = () => axios.get(url);
export const createAgenda = (newAgenda) => axios.post(url, newAgenda);
export const updateAgenda = (id, updatedAgenda) => axios.patch(`${url}/${id}`, updatedAgenda);
export const deleteAgenda = (id) => axios.delete(`${url}/${id}`);


const altURL = 'https://still-bastion-09694.herokuapp.com/todos';

export const fetchTodos = () => axios.get(altURL);
export const createTodo = (newTodo) => axios.post(altURL, newTodo);
export const updateTodo = (id, updatedTodo) => axios.patch(`${altURL}/${id}`, updatedTodo);
export const deleteTodo = (id) => axios.delete(`${altURL}/${id}`);
export const checkTask = (id) => axios.patch(`${altURL}/${id}/checkTask`);