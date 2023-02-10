const axios = require('axios');
const config = require('../config');

const ApiService = axios.create({
  baseURL: config.APP_URL,
  headers: {
    Accept: 'application/json',
  },
});

ApiService.interceptors.response.use(
  (response) => response,
  (axiosError) => Promise.reject(axiosError),
);

module.exports = ApiService;
