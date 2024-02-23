import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getAllClauses,
  addClause,
  updateClause,
  deleteClause,
} from "../../helper/fetchers/Clause";

export const useGetAllClauses = () => {
  const query = useQuery("clause", getAllClauses);

  return query;
};

export const useAddClause = (onSuccess) => {
  return useMutation(addClause, {
    onSuccess,
    onError: (error) => {
      // Handle error
    },
  });
};
export const useUpdateClause = (onSuccess,id) => {
  return useMutation((data) => updateClause(id, data), {
    onSuccess,
    onError: (error) => {
      // Handle error
    },
  });
};
export const useDeleteClause = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteClause, {
    onSuccess: () => {
      queryClient.invalidateQueries("clause");
    },
    onError: (error) => {
      // Handle error
    },
  });
};
