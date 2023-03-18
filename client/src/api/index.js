import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const createCV = (newCV) => API.post('/CV', newCV);
export const updateCV = (id, updatedCV) => API.patch(`/CV/${id}`, updatedCV);
export const deleteCV = (id) => API.delete(`/CV/${id}`);


export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);