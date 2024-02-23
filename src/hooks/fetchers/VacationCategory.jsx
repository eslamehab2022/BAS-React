import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getAllVacationCategories,
  addVacationCategory,
  updateVacationCategory,
  deleteVacationCategory,
} from "../../helper/fetchers/VacationCategory";

export const useGetAllVacationCategories = () => {
  const query = useQuery("vacation-category", getAllVacationCategories);

  return query;
};

export const useAddVacationCategory = (onSuccess) => {
  return useMutation(addVacationCategory, {
    onSuccess,
    onError: (error) => {
      // Handle error
    },
  });
};
export const useUpdateVacationCategory = (onSuccess, id) => {
  return useMutation((data) => updateVacationCategory(id, data), {
    onSuccess,
    onError: (error) => {
      // Handle error
    },
  });
};
export const useDeleteVacationCategory = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteVacationCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("vacation-category");
    },
    onError: (error) => {
      // Handle error
    },
  });
};
