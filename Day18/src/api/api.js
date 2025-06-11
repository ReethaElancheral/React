
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://dummyjson.com/products', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
