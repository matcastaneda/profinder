import axios, { AxiosInstance } from 'axios';
import { GITHUB_API_URL, HEADERS } from './constants';

const http: AxiosInstance = axios.create({
  baseURL: GITHUB_API_URL,
  headers: HEADERS,
});

export default http;
