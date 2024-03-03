import { useEffect, useState } from "react";
import { myAxiosJson } from "../../../../helper/https";

export const useGetSupervisors = () => {
    const [supervisors, setSupervisors] = useState([]);
    useEffect(() => {
      myAxiosJson("user/manager")
        .then((data) => {
          console.log(data?.data?.allUsers);
          setSupervisors(data?.data?.allUsers);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    return {
      supervisors,
    };
  };