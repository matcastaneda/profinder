import axios, { AxiosInstance, isAxiosError } from 'axios';
import { GITHUB_API_URL, HEADERS } from './constants';

const http: AxiosInstance = axios.create({
  baseURL: GITHUB_API_URL,
  headers: HEADERS,
});

http.interceptors.response.use(
  response => response,
  error => {
    if (isAxiosError(error)) {
      const { response } = error;
      if (response?.status === 404) {
        return Promise.reject(new Error('User not found'));
      }

      if (response?.status === 403) {
        return Promise.reject(new Error('API rate limit exceeded'));
      }

      if (response?.status === 401) {
        return Promise.reject(new Error('Invalid API key'));
      }

      if (response?.status === 500) {
        return Promise.reject(new Error('Internal server error'));
      }
    }
    return Promise.reject(error);
  },
);

export default http;
