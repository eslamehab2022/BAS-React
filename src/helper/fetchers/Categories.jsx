import myAxiosInstance from "../https";

export const getAllCategories = () => myAxiosInstance("category");
export const addCategory = (data) => myAxiosInstance.post("category",data);
export const deleteCategory = (id) => myAxiosInstance.delete(`category/${id}`);
