import axios from 'axios';

export const proxyButtonsApi = axios.create({
  baseURL: 'http://localhost:4000/proxy/buttons-api',
});
