import { useEffect, useState } from "react";
import { myAxiosJson } from "../../../../helper/https";

export const useGetStatistics = () => {
    const [statistics,setStatistics] = useState([])
    useEffect(()=>{
      myAxiosJson('statics/tasks')
    .then(data=> {
      console.log('statics/tasks',data?.data);
      setStatistics(data?.data);
    })
    },[])
  return {statistics}
  }