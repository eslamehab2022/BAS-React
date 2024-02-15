import myAxiosInstance from "../https";

export const getAllServices = () => myAxiosInstance("services");
export const addService = (data) => myAxiosInstance.post("services", data);
export const updateService = (serviceId, data) =>
  myAxiosInstance.patch(`services/${serviceId}`, data);
export const deleteService = (serviceId) =>
  myAxiosInstance.delete(`services/${serviceId}`);
