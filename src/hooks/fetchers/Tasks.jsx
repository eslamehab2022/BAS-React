import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask,
  getTask,
} from "../../helper/fetchers/Tasks";

export const useGetAllTasks = () => {
  const query = useQuery("task", getAllTasks);

  return query;
};
export const useGetTask = (taskId) => {
  const query = useQuery(["task",taskId],()=> getTask(taskId));

  return query;
};

// export const useAddCategory = (onSuccess) => {
//   const queryClient = useQueryClient();
//   return useMutation((data) => addTask(data), {
//     onSuccess: () => {
//       queryClient.invalidateQueries("task");
//       onSuccess()
//     },
//     onError: (error) => {
//       // Handle error
//     },
//   });
// };
// export const useUpdateCategory = (onSuccess, id) => {
//   const queryClient = useQueryClient();
//   return useMutation((data) => updateTask(id, data), {
//     onSuccess: () => {
//       queryClient.invalidateQueries("task");
//       onSuccess()
//     },
//     onError: (error) => {
//       // Handle error
//     },
//   });
// };
// export const useDeleteCategory = () => {
//   const queryClient = useQueryClient();
//   return useMutation(deleteTask, {
//     onSuccess: () => {
//       queryClient.invalidateQueries("task");
//     },
//     onError: (error) => {
//       // Handle error
//     },
//   });
// };
