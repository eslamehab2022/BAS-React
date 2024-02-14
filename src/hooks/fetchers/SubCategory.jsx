import { useQuery,useMutation ,useQueryClient } from "react-query";
import { addSubCategory, deleteSubCategory, getAllSubCategories, updateSubCategory } from "../../helper/fetchers/SubCategories";



export const useGetAllSubCategories = (categoryId) => {
  const query = useQuery("sub-category", () => getAllSubCategories(categoryId));
    
  return query;
};

export const useAddSubCategory = (onSuccess,categoryId) => {
    // console.log("added to categoryId:",categoryId);
    return useMutation((subcategoryData) => addSubCategory(categoryId,subcategoryData),
        {
            onSuccess,
            onError: (error) => {
                // Handle error
            }
        }
    );
}
export const useUpdateSubCategory = (onSuccess,categoryId,subId) => {
    
    return useMutation((data) => updateSubCategory(categoryId,subId,data),{
            onSuccess,
            onError: (error) => {
                // Handle error
            }
        }
    );
}



export const useDeleteSubCategory = () => {
    const queryClient = useQueryClient()
    return useMutation(deleteSubCategory,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('sub-category')
            },
            onError: (error) => {
                // Handle error
            }
        }
    );
}