import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getAllReceptions,
  addReception,
  updateReception,
  deleteReception,
} from "../../helper/fetchers/Reception";

export const useGetAllReceptions = () => {
  const query = useQuery("reception", getAllReceptions);

  return query;
};

export const useAddReception = (onSuccess) => {
  return useMutation(addReception, {
    onSuccess,
    onError: (error) => {
      // Handle error
    },
  });
};
export const useUpdateReception = (onSuccess, id) => {
  return useMutation((data) => updateReception(id, data), {
    onSuccess,
    onError: (error) => {
      // Handle error
    },
  });
};
export const useDeleteReception = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteReception, {
    onSuccess: () => {
      queryClient.invalidateQueries("reception");
    },
    onError: (error) => {
      // Handle error
    },
  });
};
