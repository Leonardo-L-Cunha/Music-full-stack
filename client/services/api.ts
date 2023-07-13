import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://musicappserve.onrender.com/',
    timeout:5000
})