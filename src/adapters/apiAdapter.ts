/* eslint-disable @typescript-eslint/no-unnecessary-type-parameters */
import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

const apiAdapter = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
  });

  return {
    delete: async <T>(url: string, config?: AxiosRequestConfig) => {
      const response = await instance.delete<T>(url, config);

      return response.data;
    },

    get: async <T>(url: string, config?: AxiosRequestConfig) => {
      const response = await instance.get<T>(url, config);

      return response.data;
    },

    post: async <T = unknown, D = unknown>(url: string, data: D, config?: AxiosRequestConfig) => {
      const response = await instance.post<T, AxiosResponse<T>, D>(url, data, config);

      return response.data;
    },

    put: async <T = unknown, D = unknown>(url: string, data: D, config?: AxiosRequestConfig) => {
      const response = await instance.put<T, AxiosResponse<T>, D>(url, data, config);

      return response.data;
    },
  };
};

export default apiAdapter;
