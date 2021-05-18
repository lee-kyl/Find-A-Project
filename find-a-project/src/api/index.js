import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000',withCredentials:false });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const signIn = (formData) => API.post('/user/signin',formData);
export const signUp = (formData) => API.post('/user/signup',formData);
export const loadProfile = (userId) => API.get(`/profile/getProfile/${userId}`);
export const loadPost = (postId) => API.get(`/post/getPost/${postId}`);
export const updateProfile = (formData) => API.post('/profile/updateProfile',formData);
export const deleteComment = (id) => API.delete(`/comment/deleteComment/${id}`);
export const createComment = (formData) => API.post('/comment/createComment/',formData);
export const loadTeam = (id) => API.get(`/team/loadTeam/${id}`);
export const updateTeam = (id,formData) => API.post(`/team/updateTeam/${id}`,formData);
export const getComments = (id) => API.get(`/comment/getComments/${id}`);
export const getTeam = (id) => API.get(`/team/getTeam/${id}`);