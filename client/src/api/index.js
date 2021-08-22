import axios from 'axios';

// test url connection for breaks
const url = 'http://localhost:5000/breaks';

export const fetchBreaks = () => axios.get(url);
export const createBreak = (newBreak) => axios.post(url, newBreak);
export const updateBreak = (id, updatedBreak) => axios.patch(`${url}/${id}`, updatedBreak);
export const deleteBreak = (id) => axios.delete(`${url}/${id}`);


