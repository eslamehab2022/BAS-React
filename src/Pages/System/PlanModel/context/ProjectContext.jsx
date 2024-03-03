import { createContext, useContext, useEffect, useState } from "react";
import { useGetAllPlans } from "../../../../hooks/fetchers/Plans";
export const ProjectContext = createContext();

export default function ProjectContextProvier({ children }) {
  const { data,isLoading } = useGetAllPlans();
   const [projects,setProjects] = useState([])
   useEffect(()=>{
    if(!isLoading){
      setProjects(data)
    }
   },[isLoading])
   const filterProjects = (key)=>{
    if(!key){
      setProjects(data)
    }else{
      const filteredData = data.filter(item=> item.status === key)
      setProjects(filteredData)
    }
   }
  return <ProjectContext.Provider value={{projects,filterProjects}}>
    {children}
  </ProjectContext.Provider>;
}

export const useProjectContext = () => useContext(ProjectContext)