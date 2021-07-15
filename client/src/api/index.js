import axios from 'axios';

const url = 'http://localhost:5000/breaks';

export const fetchPosts = () => axios.get(url);