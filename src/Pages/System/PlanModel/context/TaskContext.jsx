import { createContext, useContext, useEffect, useState } from "react";
import { useGetAllTasks } from "../../../../hooks/fetchers/Tasks";
export const TaskContext = createContext();

export default function TaskContextProvier({ children }) {
  const { data,isLoading } = useGetAllTasks();
   const [tasks,setTasks] = useState([])
   useEffect(()=>{
    if(!isLoading){
      setTasks(data)
    }
   },[isLoading])
   const filterTasks = (key)=>{
    if(!key){
      setTasks(data)
    }else{
      const filteredData = data.filter(item=> item.status === key)
      setTasks(filteredData)
    }
   }
  return <TaskContext.Provider value={{tasks,filterTasks}}>
    {children}
  </TaskContext.Provider>;
}

export const useTaskContext = () => useContext(TaskContext)