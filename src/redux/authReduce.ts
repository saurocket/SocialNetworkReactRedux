import {securityAPI, statusMeAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/ET_USER_DATA';
const SET_CAPTCHA_URL_SUCCESS = 'SET_CAPTCHA'


let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null,
}

export type InitialStateType = typeof initialState

export const authReducer = (state=initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return  {
                ...state,
                ...action.payload,
            };
        }
        case SET_CAPTCHA_URL_SUCCESS: {
                return {...state,
                    ...action.captchaUrl}
        }
        default:  return state;
    }
}

type SetAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login:string | null
    isAuth:boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetAuthUserDataActionPayloadType
}
 const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean)
     :SetAuthUserDataActionType => {
    return ({
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    });
}



type SetCaptchaUrlActionType = {
    type: typeof SET_CAPTCHA_URL_SUCCESS
    captchaUrl: {captchaUrl:string}
}

const setCaptchaUrl = (captchaUrl: string):SetCaptchaUrlActionType => {
    return ({
        type: SET_CAPTCHA_URL_SUCCESS,
        captchaUrl: {captchaUrl}
        })
}

export const loginUser = (email:string, password:string, rememberMe:boolean, captcha:string) => {
    return (
        async (dispatch:any) => {
            let response = await statusMeAPI.login(email, password, rememberMe,captcha);
            if (response.data.resultCode === 0) {
                dispatch(getAuthMe());
            }else if (response.data.resultCode === 10){
                dispatch(getCaptchaUrl());
                const message = response.data.messages[0].length > 0 ?
                    response.data.messages[0] :
                    "some Error"
                ;
                dispatch(stopSubmit("login", {_error: message}))

            }else {
                const message = response.data.messages[0].length > 0 ?
                    response.data.messages[0] :
                    "some Error"
                ;
                dispatch(stopSubmit("login", {_error: message}))

            }
        }
    )
}
export const getCaptchaUrl = () => {
    return (
      async  (dispatch:any) => {
            let response = await securityAPI.getCaptchaUrl();
            const captchaUrl= response.data.url;
            dispatch(setCaptchaUrl(captchaUrl));
        }
    )
}



export const logOutUser = () => {
    return (
        async (dispatch:any) => {
            let response = await statusMeAPI.logOut();
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        }
    )
}
export const getAuthMe = () => {
    return (
      async  (dispatch:any) => {
            let response = await statusMeAPI.statusMe();
                if (response.resultCode === 0) {
                    const {id, email, login} = response.data
                    dispatch(setAuthUserData(id, email, login, true));
                }
        }
    )
}




export default authReducer