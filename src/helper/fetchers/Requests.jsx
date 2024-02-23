import myAxiosInstance, { myAxios, myAxiosJson } from "../https";

export const addRequest = (data) => myAxiosInstance.post("/request/", data);
export const getAllRequests = () => myAxiosInstance("/request/");
export const getRequestsWithProjectType = (type) =>
  myAxiosInstance(`/request?projectType=${type}`);
export const getDesignRequestsWithStatus = (status) =>
  myAxiosInstance(`/request?status=${status}&projectType=1`);
  export const getReviewRequestsWithStatus = (status) =>
  myAxiosInstance(`/request?status=${status}&projectType=2`)
export const getDesignRequestsWithid = (id) =>
  myAxiosInstance(`/request/${id}`);
export const AcceptRequestwithId = (id) =>
  myAxios.patch(`/request/confirm/${id}`);
export const rejecetRequestwithId = (id, comment) =>
  myAxiosJson.patch(`/request/rejected/${id}`, { resonRejected: comment });
export const softDeleteRequst = (id) => myAxios.patch(`/request/delete/${id}`);

//   http://bsa2011.com:5000/api/v1/request?status=0&projectType=1
