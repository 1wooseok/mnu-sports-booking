import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 5000,
})

api.interceptors.response.use(res => {
  return res.data;
})

export default api;
