import myAxiosInstance, { myAxios, myAxiosJson } from "../https";

export const getAllUsers = () => myAxios("/user/");
export const addUser = (data) => myAxiosInstance.post("/user/", data);
export const getUserById = (id) => myAxios(`/user/${id}`);
export const deleteUserByID = (id) => myAxios.delete(`/user/${id}`);
export const upgradePassword = (id,data) => myAxiosJson.patch(`/user/updatePassword/${id}`, data);
