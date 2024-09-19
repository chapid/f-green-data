import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getAuthToken = () => {
  return localStorage.getItem('token');
}

export const setAuthToken = (token) => {
  localStorage.setItem('token', token);
}

export const request = async (method, url, data, contentType = 'application/json') => {
  let headers = {};
  if (getAuthToken() !== null && getAuthToken() !== undefined) {
    headers = { Authorization: `Bearer ${getAuthToken()}` };
  }
  return axios({
    method: method,
    headers: {
      ...headers,
      'Content-Type': contentType,
    },
    url: url,
    data: data,
  });
};