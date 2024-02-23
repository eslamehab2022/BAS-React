import myAxiosInstance from "../https";

export const getAllServiceCategories = () => myAxiosInstance("serviceHuman");
export const addServiceCategory = (data) => myAxiosInstance.post("serviceHuman", data);
export const updateServiceCategory = (categoryId, data) =>
  myAxiosInstance.patch(`serviceHuman/${categoryId}`, data);
export const deleteServiceCategory = (categoryId) =>
  myAxiosInstance.delete(`serviceHuman/${categoryId}`);
  