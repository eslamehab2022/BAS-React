import { myAxios } from "../https";

export const getAllServicesHumans = () => myAxios("/serviceHuman/");