import axios from 'axios';

const API = axios.create({ bashURL: 'http://localhost:5000' });

export const signIn = (formData) => API.post('/user/signin',formData);
export const signUp = (formData) => API.post('/user/signup',formData);