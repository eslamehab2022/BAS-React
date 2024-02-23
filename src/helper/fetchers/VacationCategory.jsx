import myAxiosInstance from "../https";

export const getAllVacationCategories = () => myAxiosInstance("vacationCategory");
export const addVacationCategory = (data) => myAxiosInstance.post("vacationCategory", data);
export const updateVacationCategory = (categoryId, data) =>
  myAxiosInstance.patch(`vacationCategory/${categoryId}`, data);
export const deleteVacationCategory = (categoryId) =>
  myAxiosInstance.delete(`vacationCategory/${categoryId}`);
  