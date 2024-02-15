import { useQuery,useMutation ,useQueryClient } from "react-query";
import { addSubService, deleteSubService, getAllSubServices, updateSubService } from "../../helper/fetchers/SubServices";



export const useGetAllSubServices = (serviceId) => {
  const query = useQuery("sub-service", () => getAllSubServices(serviceId));
    
  return query;
};

export const useAddSubService = (onSuccess,serviceId) => {
    // console.log("added to categoryId:",categoryId);
    return useMutation((subserviceData) => addSubService(serviceId,subserviceData),
        {
            onSuccess,
            onError: (error) => {
                // Handle error
            }
        }
    );
}
export const useUpdateSubService = (onSuccess,serviceID,subId) => {
    
    return useMutation((data) => updateSubService(serviceID,subId,data),{
            onSuccess,
            onError: (error) => {
                // Handle error
            }
        }
    );
}



export const useDeleteSubService = () => {
    const queryClient = useQueryClient()
    return useMutation(deleteSubService,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('sub-service')
            },
            onError: (error) => {
                // Handle error
            }
        }
    );
}