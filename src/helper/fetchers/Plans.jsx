import myAxiosInstance from "../https";

export const getAllPlans = () =>
  myAxiosInstance("plan").then((data) => data?.data?.plans);
export const getPlan = (planId) =>
  myAxiosInstance(`plan/${planId}`).then((data) => data?.data?.plan);
export const addPlan = (data) => myAxiosInstance.post("plan", data);
export const updatePlan = (planId, data) =>
  myAxiosInstance.patch(`plan/${planId}`, data);
export const deletePlan = (planId) => myAxiosInstance.delete(`plan/${planId}`);
