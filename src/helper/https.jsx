// 406

import axios from "axios";
import { toast } from "react-toastify";
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
    config.headers["Content-Type"] = "application/json";
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
    if (error?.response?.status === 406) {
      toast.error(error.response.data?.message);
    }

    return Promise.reject(error);
  }
);
export default myAxiosInstance;
