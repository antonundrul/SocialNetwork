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
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId);
    },

    followUser(userId) {
        return axiosInstance.post(`follow/${userId}`).then(response => response.data);
    },

    unfollowUser(userId) {
        return axiosInstance.delete(`follow/${userId}`).then(response => response.data);
    }

}


export const profileAPI = {

    getProfile(userId) {
        return axiosInstance.get(`profile/${userId}`).then(response => response.data);
    },

    getStatus(userId){
        return axiosInstance.get(`profile/status/${userId}`).then(response => response.data);
    },

    updateStatus(status) {
        return axiosInstance.put(`profile/status`, {status: status}).then(response => response.data);
    }

}

export const authAPI = {
    me() {
        return axiosInstance.get(`auth/me`).then(response => response.data);
    },

    login(email,password, rememberMe=false) {
        return axiosInstance.post(`auth/login`,{email,password,rememberMe}).then(response => response.data);
    },

    logout() {
        return axiosInstance.delete(`auth/login`).then(response => response.data);
    }
}


