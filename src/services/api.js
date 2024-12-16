import axios from 'axios';

const api = axios.create({
  baseURL: '/api'
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authApi = {
  login: (credentials) => api.post('/auth/login/', credentials),
  register: (userData) => api.post('/auth/register/', userData),
  getProfile: () => api.get('/auth/profile/'),
};

export const jobsApi = {
  getJobs: () => api.get('/jobs/'),
  getJobDetails: (id) => api.get(`/jobs/${id}/`),
  applyForJob: (id, data) => api.post(`/jobs/${id}/apply/`, data),
};

export const testsApi = {
  getTests: () => api.get('/tests/'),
  startTest: (id) => api.post(`/tests/${id}/start/`),
  submitTest: (id, answers) => api.post(`/tests/${id}/submit/`, { answers }),
};

export default api;