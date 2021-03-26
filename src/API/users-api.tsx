import {GetItemsType, instance, APIResponseType} from "./api";
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unFollowUser(id: number) {
        return instance.delete(`follow/${id}`).then(response => response.data) as Promise<APIResponseType>
    },
    followUser(id: number) {
        return instance.post<APIResponseType>(`/follow/${id}`).then(response => response.data)
    }

}