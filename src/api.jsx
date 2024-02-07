import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const instance = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});