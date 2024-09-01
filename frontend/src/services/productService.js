import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const authHeader = {
  headers: {
    'x-api-key': API_KEY,
  },
};

export const getAllProducts = () => {
  return axios.get(`${API_URL}/products`, authHeader);
};

export const getProductById = (id) => {
  return axios.get(`${API_URL}/products/${id}`, authHeader);
};

export const addProduct = (product) => {
  return axios.post(`${API_URL}/products`, product, authHeader);
};

export const updateProduct = (id, product) => {
  return axios.put(`${API_URL}/products/${id}`, product, authHeader);
};

export const deleteProduct = (id) => {
  return axios.delete(`${API_URL}/products/${id}`, authHeader);
};
