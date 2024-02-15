import myAxiosInstance from "../https";

export const getAllSubServices = (serviceId) =>
  myAxiosInstance(`services/${serviceId}/subservices/`);

export const addSubService = (serviceId, data) =>
  myAxiosInstance.post(`services/${serviceId}/subservices`, data);

export const updateSubService = (serviceID,subId, data) =>
  myAxiosInstance.patch(`services/${serviceID}/subservices/${subId}`, data);



export const deleteSubService = ([serviceID, subId]) => myAxiosInstance.delete(`services/${serviceID}/subservices/${subId}`);
