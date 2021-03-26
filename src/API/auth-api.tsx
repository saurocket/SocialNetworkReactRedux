import {instance, APIResponseType} from "./api";

type MeResponseDataType = {id: number, email: string, login: string}
type MeLoginDataType = {userId: number}

export const statusMeAPI = {
    statusMe() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(responce => responce.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: string | null = null) {

        return instance.post<APIResponseType<MeLoginDataType>>('/auth/login', {email, password, rememberMe, captcha})
            .then(response => response.data);
    },
    logOut() {
        return instance.delete('/auth/login');
    }
}