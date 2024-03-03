import myAxiosInstance, { myAxios } from "../https";

export const getAllVactions = () => myAxios("/vacation");
export const getVactionById = (id) => myAxios(`/vacation/${id}`);
export const createVaction = (data) => myAxiosInstance.post(`/vacation/`, data);
