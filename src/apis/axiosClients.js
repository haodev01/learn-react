import axios from 'axios';
import {ACCESS_TOKEN} from "../constants/index.js";

const axiosClients = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 1000,
});

//  handle 2 status
//  trước call api

axiosClients.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log("request trước khi call api")
  const token = localStorage.getItem(ACCESS_TOKEN) || 'Token'
  config.headers.Authorization = 'Bear ' + token
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosClients.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log("request sau khi call api", response)
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});
//  sau call api

export default  axiosClients