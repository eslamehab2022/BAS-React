import myAxiosInstance from "../https";

export const getAllClauses = () => myAxiosInstance("clause");
export const addClause = (data) => myAxiosInstance.post("clause", data);
export const updateClause = (clauseId, data) =>
  myAxiosInstance.patch(`clause/${clauseId}`, data);
export const deleteClause = (clauseId) =>
  myAxiosInstance.delete(`clause/${clauseId}`);
