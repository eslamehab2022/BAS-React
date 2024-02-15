import { useQuery, useMutation, useQueryClient } from "react-query";
import { addService, deleteService, getAllServices, updateService } from "../../helper/fetchers/Services";
export const useGetAllServices = () => {
  const query = useQuery("services", getAllServices);
  return query;
};
export const useAddService = (onSuccess) => {
  return useMutation(addService, {
    onSuccess,
    onError: (error) => {
      // Handle error
    },
  });
};
export const useUpdateService = (onSuccess, id) => {
  return useMutation((data) => updateService(id, data), {
    onSuccess,
    onError: (error) => {
      // Handle error
    },
  });
};
export const useDeleteService = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteService, {
    onSuccess: () => {
      queryClient.invalidateQueries("services");
    },
    onError: (error) => {
      // Handle error
    },
  });
};