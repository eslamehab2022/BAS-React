import { useEffect, useState } from "react";
import { myAxiosJson } from "../../../../helper/https";

export const useGetEmployees = () => {
    const [supervisors, setSupervisors] = useState([]);
    useEffect(() => {
        myAxiosJson("user/allUsers")
          .then((data) => {
            // console.log(data?.data?.allUsers);
            setSupervisors(data?.data?.allUsers);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
      return {
        supervisors
      }
}