import { useQuery,useMutation ,useQueryClient } from "react-query";
import { addCategory, deleteCategory, getAllCategories } from "../../helper/fetchers/Categories";



export const useGetAllCategories = () => {
  const query = useQuery("category", getAllCategories);

  return query;
};

export const useAddCategory = (onSuccess) => {
    const queryClient = useQueryClient()
    return useMutation(addCategory,
        {
            onSuccess,
            onError: (error) => {
                // Handle error
            }
        }
    );
}
export const useDeleteCategory = () => {
    const queryClient = useQueryClient()
    return useMutation(deleteCategory,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('category')
            },
            onError: (error) => {
                // Handle error
            }
        }
    );
}