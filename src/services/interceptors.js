import axios from "axios";

export const handleRequestInterceptor = (headers) =>
  axios.interceptors.request.use((config) => {
    config.headers = { ...config.headers, ...headers };
    return config;
  });

export const handleResponseInterceptor = (handle401) =>
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        handle401();
      }
      return Promise.reject(error);
    }
  );
