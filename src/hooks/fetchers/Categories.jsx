import { useEffect, useState } from "react"
import myAxiosInstance from "../../helper/https"
import { useQuery } from 'react-query';
export const useGetAllCategories = () => {
    const [isLoading,setIsLoading] = useState(false)
    const [categories, setCategories] = useState([])
    useEffect(() => {
        setIsLoading(true);
        myAxiosInstance("category")
        .then((data) => {
            setCategories(data)
        })
        setIsLoading(false);
    },[isLoading])

    return {
        data: categories ,
        isLoading: isLoading
    }
}