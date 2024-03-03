import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getAllProjects,
  addProject,
  updateProject,
  deleteProject,
  getProject,
} from "../../helper/fetchers/Projects";

export const useGetAllProjects = () => {
  const query = useQuery("project", getAllProjects);

  return query;
};
export const useGetProject = (id) => {
  const query = useQuery(["project",id],()=> getProject(id));

  return query;
};

export const useAddProject = (onSuccess) => {
  const queryClient = useQueryClient();
  return useMutation((data) => addProject(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("project");
      onSuccess();
    },
    onError: (error) => {
      // Handle error
    },
  });
};
export const useUpdateProject = (onSuccess, id) => {
  const queryClient = useQueryClient();
  return useMutation((data) => updateProject(id, data), {
    onSuccess: () => {
      queryClient.invalidateQueries("project");
      onSuccess();
    },
    onError: (error) => {
      // Handle error
    },
  });
};
export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteProject, {
    onSuccess: () => {
      queryClient.invalidateQueries("project");
    },
    onError: (error) => {
      // Handle error
    },
  });
};
