// 406

import axios from "axios";

import config from "../Config/Config";
import Cookies from "js-cookie";

// axios.defaults.baseURL = config.apiGateway?.URL;

export const myAxiosInstance = axios.create({
  baseURL: config.apiGateway?.URL,
});

// Add a request interceptor
myAxiosInstance.interceptors.request.use(
  async (config) => {
    if (Cookies.get("accessToken")) {
      config.headers["authes"] = `BSA__${Cookies.get("accessToken")}`;
    }
    config.headers["Content-Type"] = "multipart/form-data";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// Add a response interceptor
myAxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // if (error?.response?.status === 404) {
    //   toast.error(error.response.data?.message);
    //   // history.push("");
    // }

    return Promise.reject(error);
  }
);
export default myAxiosInstance;

export const myAxiosJson = axios.create({
  baseURL: config.apiGateway?.URL,
});
myAxiosJson.interceptors.request.use(
  async (config) => {
    if (Cookies.get("accessToken")) {
      config.headers["authes"] = `BSA__${Cookies.get("accessToken")}`;
    }

    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
myAxiosJson.interceptors.response.use(
  (response) => response,
  (error) => {
    // if (error?.response?.status === 404) {
    //   toast.error(error.response.data?.message);
    //   // history.push("");
    // }

    return Promise.reject(error);
  }
);

export const myAxios = axios.create({
  baseURL: config.apiGateway?.URL,
});
myAxios.interceptors.request.use(
  async (config) => {
    if (Cookies.get("accessToken")) {
      config.headers["authes"] = `BSA__${Cookies.get("accessToken")}`;
    }

    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
myAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    // if (error?.response?.status === 404) {
    //   toast.error(error.response.data?.message);
    //   // history.push("");
    // }

    return Promise.reject(error);
  }
);
