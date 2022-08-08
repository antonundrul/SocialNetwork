import axios from "axios";

const API_KEY = '5e756f19-4182-43de-b1fb-4f5a83291dc1'

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

    followUser(userId) {
        return axiosInstance.post(`follow/${userId}`).then(response => response.data);
    },

    unfollowUser(userId) {
        return axiosInstance.delete(`follow/${userId}`).then(response => response.data);
    }

}

export const authAPI = {
    me() {
        return axiosInstance.get(`auth/me`).then(response => response.data)
    }
}


