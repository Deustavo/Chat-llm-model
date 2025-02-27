import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://0.0.0.0:80/v1',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});