import myAxiosInstance, { myAxios } from "../https";

export const getAllHumanResours = () => myAxios("/human");
export const getHumanById = (id) => myAxios(`/human/${id}`);
export const createHumanResuroesService = (data) =>
myAxiosInstance.post("/human/", data);
