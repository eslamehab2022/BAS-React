import { myAxios } from "../https";

export const getUserProfile = () => myAxios("/user/profile");