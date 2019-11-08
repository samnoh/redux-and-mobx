import axios from 'axios';

const api = id => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

export default api;
