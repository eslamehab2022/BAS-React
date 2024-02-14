import myAxiosInstance from "../https";

export const getAllSubCategories = (categoryId) =>
  myAxiosInstance(`category/${categoryId}/subcategory`);

export const addSubCategory = (categoryId, data) =>
  myAxiosInstance.post(`category/${categoryId}/subcategory`, data);

export const updateSubCategory = (categoryId,subId, data) =>
  myAxiosInstance.patch(`category/${categoryId}/subcategory/${subId}`, data);



export const deleteSubCategory = ([categoryId, subId]) => myAxiosInstance.delete(`category/${categoryId}/subcategory/${subId}`);
