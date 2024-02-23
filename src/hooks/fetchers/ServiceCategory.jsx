import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getAllServiceCategories,
  addServiceCategory,
  updateServiceCategory,
  deleteServiceCategory,
} from "../../helper/fetchers/ServiceCategory";

export const useGetAllServiceCategories = () => {
  const query = useQuery("service-category", getAllServiceCategories);
  return query;
};

export const useAddServiceCategory = (onSuccess) => {
  return useMutation(addServiceCategory, {
    onSuccess,
    onError: (error) => {
      // Handle error
    },
  });
};
export const useUpdateServiceCategory = (onSuccess, id) => {
  return useMutation((data) => updateServiceCategory(id, data), {
    onSuccess,
    onError: (error) => {
      // Handle error
    },
  });
};
export const useDeleteServiceCategory = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteServiceCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("service-category");
    },
    onError: (error) => {
      // Handle error
    },
  });
};
