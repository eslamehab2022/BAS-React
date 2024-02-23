import myAxiosInstance from "../https";

export const getAllReceptions = () => myAxiosInstance("reception");
export const addReception = (data) => myAxiosInstance.post("reception", data);
export const updateReception = (receptionId, data) =>
  myAxiosInstance.patch(`reception/${receptionId}`, data);
export const deleteReception = (receptionId) =>
  myAxiosInstance.delete(`reception/${receptionId}`);
