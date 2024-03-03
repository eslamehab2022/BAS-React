import myAxiosInstance from "../https";
import { CheckRole } from "../utils";

export const roles = {
    admin: "مدير",
    senior: "مدير قسم",
    office: "مدير المكتب",
  };

export const getAllTasks = () => {
    if(CheckRole("مدير")) {return myAxiosInstance("task/admin").then(task => task.data.tasks);}
    if(CheckRole("مدير قسم")) {return myAxiosInstance("task/senior").then(task => task.data.tasks);}
    if(CheckRole("مدير المكتب")) {return myAxiosInstance("task/office").then(task => task.data.tasks);}
    if(CheckRole("موظف")) {return myAxiosInstance("task/me").then(task => task.data.tasks);}
}
export const getTask = (taskId) => myAxiosInstance(`task/${taskId}`).then(task => task.data.task);
// export const addTask = (data) => myAxiosInstance.post("plan", data);
// export const updateTask = (taskId, data) =>
// myAxiosInstance.patch(`plan/${taskId}`, data);
// export const deleteTask = (taskId) =>
// myAxiosInstance.delete(`plan/${taskId}`);
