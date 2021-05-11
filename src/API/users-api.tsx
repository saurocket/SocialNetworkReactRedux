import {GetItemsType, instance, APIResponseType} from "./api";
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, term:string = '', friend: null | boolean = null) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` +
            (friend === null ? '': `&friend=${friend}`))
            .then(response => response.data)
    },
    unFollowUser(id: number) {
        return instance.delete(`follow/${id}`).then(response => response.data) as Promise<APIResponseType>
    },
    followUser(id: number) {
        return instance.post<ResponseType>(`/follow/${id}`).then(response => response.data) as Promise<APIResponseType>
    }

}