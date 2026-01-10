import apiClient from "@/services/apiClient";
import { API_BASE_URL } from "@/utils/constants"

const blogApi = () => {

    const getBlogs = async () => {

        const response = await fetch(API_BASE_URL + "/blogs",{
            next:{
                revalidate:60
            }
        });
        const data = await response.json();
        
        return data;
    }

    const getBlogById = async (id) => {
        const response = await fetch(API_BASE_URL + "/blogs/" + id,{
            next:{
                revalidate:60
            }
        });
        const data = await response.json();
        return data;
    }

    const updateCount = async (id) => {
        const res = await apiClient.post('/blogs/' + id + '/update-count');
        return res.data;
    }

    return {
        getBlogs,
        getBlogById,
        updateCount
    }
}

export default blogApi;