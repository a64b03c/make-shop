import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_API,
  timeout: 10000,
});

http.interceptors.request.use((config) => {
  return config;
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default http;
