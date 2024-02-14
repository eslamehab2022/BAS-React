import myAxiosInstance from "../https";

export const getAllCategories = () => myAxiosInstance("category");
export const addCategory = (data) => myAxiosInstance.post("category", data);
export const updateCategory = (categoryId, data) =>
  myAxiosInstance.patch(`category/${categoryId}`, data);
export const deleteCategory = (categoryId) =>
  myAxiosInstance.delete(`category/${categoryId}`);
