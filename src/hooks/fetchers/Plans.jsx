import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getAllPlans,
  getPlan,
  addPlan,
  updatePlan,
  deletePlan,
} from "../../helper/fetchers/Plans";

export const useGetAllPlans = () => {
  const query = useQuery("plan", getAllPlans);
  return query;
};
export const useGetPlan = (id) => {
  const query = useQuery(["plan", id], () => getPlan(id));
  return query;
};

export const useAddPlan = (onSuccess) => {
  const queryClient = useQueryClient();
  return useMutation((data) => addPlan(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("plan");
      onSuccess();
    },
    onError: (error) => {
      // Handle error
    },
  });
};
export const useUpdatePlan = (onSuccess, id) => {
  const queryClient = useQueryClient();
  return useMutation((data) => updatePlan(id, data), {
    onSuccess: () => {
      queryClient.invalidateQueries("plan");
      onSuccess();
    },
    onError: (error) => {
      // Handle error
    },
  });
};
export const useDeletePlan = () => {
  const queryClient = useQueryClient();
  return useMutation(deletePlan, {
    onSuccess: () => {
      queryClient.invalidateQueries("project");
    },
    onError: (error) => {
      // Handle error
    },
  });
};
