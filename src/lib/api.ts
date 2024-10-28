import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  register: (data: { email: string; password: string; name: string }) =>
    api.post('/auth/register', data),
  
  login: (data: { email: string; password: string }) =>
    api.post('/auth/login', data),
};

export const profile = {
  get: () => api.get('/profile'),
  update: (data: any) => api.put('/profile', data),
};

export default api;