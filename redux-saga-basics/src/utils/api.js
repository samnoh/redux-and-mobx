import axios from 'axios';

const api = () => axios.get('https://jsonplaceholder.typicode.com/users');

export default api;
