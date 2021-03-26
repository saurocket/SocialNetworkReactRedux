import {ProfileType} from "../redux/profileReducer";
import {instance, APIResponseType} from "./api";
import {PhotosType} from "../types/types";

export const profileAPI = {
    getUsers(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId).then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/` + userId).then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put<APIResponseType>(`/profile/status`, {status: status}).then(response => response.data)
    },
    updatePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile)

        return instance.put<APIResponseType<PhotosType>>('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data);
    },
    saveProfile(data: ProfileType) {
        return instance.put<APIResponseType>(`/profile`, data)
    }
}