import { myAxiosJson } from "../https";
export const userLogin = (data) => {
  
  return myAxiosJson.post("/user/login", data);
};
