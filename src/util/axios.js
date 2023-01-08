import axios from 'axios';

const { localStorage } = window;

const instance = axios.create({
  baseURL: 'https://api.happyrabbit.co.kr/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Controll-Allow-Origin': '*',
    Athorization: 'bearer{accessToken}',
  },
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    if (config.headers) {
      config.headers.authorization = `${localStorage.getItem('token')}`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
