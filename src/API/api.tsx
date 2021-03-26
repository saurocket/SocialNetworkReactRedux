import axios from "axios";
import {UserType} from "../types/types";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "a39074ae-b5e2-4af2-aadf-9a632080dcfb"
    }
})

export enum ResultCodesEnum  {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10

}

export type GetItemsType = {
items: Array<UserType>
    totalCount: number
    error: string | null

}
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}