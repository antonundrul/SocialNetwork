import axios from "axios";
import {API_KEY} from "../redux/reduxStore";


const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": API_KEY
    }
});


export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },

    getProfile(userId) {
        return axiosInstance.get(`profile/${userId}`).then(response => response.data);
    },

    followUser(user){
        return axiosInstance.post(`follow/${user.id}`).then(response => response.data);
    },

    unfollowUser(user) {
        return axiosInstance.delete(`follow/${user.id}`).then(response => response.data);
    }

}

export const authMe = () => {
    return axiosInstance.get(`auth/me`).then(response => response.data)
}


