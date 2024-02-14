import myAxiosInstance from "../https";
export const userLogin = (userData) => myAxiosInstance.post("/user/login", userData);
