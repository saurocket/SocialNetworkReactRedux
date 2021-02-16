import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "a39074ae-b5e2-4af2-aadf-9a632080dcfb"
    }
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}
        &count=${pageSize}
        `).then(response => response.data)
    },
    unFollowUser(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    followUser(id) {
        return instance.post(`/follow/${id}`).then(response => response.data)
    }

}
export const profileAPI = {
    getUsers(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, {status: status})
    }
}

export const statusMeAPI = {
    statusMe() {
        return instance.get(`auth/me`).then(responce => responce.data);
    },
    login(email, password, rememberMe = false) {

        return instance.post('/auth/login', {email, password, rememberMe});
    },
    logOut() {
        return instance.delete('/auth/login');
    }
}

