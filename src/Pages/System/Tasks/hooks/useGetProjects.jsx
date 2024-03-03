import { useEffect, useState } from "react";
import { myAxiosJson } from "../../../../helper/https";

export const useGetProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
      myAxiosJson("request/select")
        .then((data) => {
          console.log("data: ", data?.data?.request);
          setProjects(data?.data?.request);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    return {
      projects,
    };
  };