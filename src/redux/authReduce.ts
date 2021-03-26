import {ResultCodesEnum} from "../API/api";
import {stopSubmit} from "redux-form";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {statusMeAPI} from "../API/auth-api";
import {securityAPI} from "../API/security-api";


let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null,
}




export const authReducer = (state=initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return  {
                ...state,
                ...action.payload,
            };
        }
        case "SET_CAPTCHA_URL_SUCCESS": {
                return {...state,
                    ...action.captchaUrl}
        }
        default:  return state;
    }
}
export const actions= {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
        return ({
            type: "SET_USER_DATA",
            payload: {userId, email, login, isAuth}
        } as const);
    },
    setCaptchaUrl: (captchaUrl: string) => {
        return ({
            type: "SET_CAPTCHA_URL_SUCCESS",
            captchaUrl: {captchaUrl}
        } as const)
    }
}


export const loginUser = (email:string, password:string, rememberMe:boolean, captcha:string): ThunkActionType  => {
    return (
        async (dispatch) => {
            let response = await statusMeAPI.login(email, password, rememberMe,captcha);
            if (response.resultCode=== ResultCodesEnum.Success) {
                dispatch(getAuthMe());
            }else if (response.resultCode === ResultCodesEnum.CaptchaIsRequired){
                dispatch(getCaptchaUrl());
                const message = response.messages[0].length > 0 ?
                    response.messages[0] :
                    "some Error"
                ;
                dispatch(stopSubmit("login", {_error: message}))
            }else {
                const message = response.messages[0].length > 0 ?
                    response.messages[0] :
                    "some Error"
                ;
                dispatch(stopSubmit("login", {_error: message}))

            }
        }
    )
}
export const getCaptchaUrl = ():ThunkActionType => {
    return (
      async  (dispatch) => {
            let data = await securityAPI.getCaptchaUrl();
            const captchaUrl= data.url;
            dispatch(actions.setCaptchaUrl(captchaUrl));
        }
    )
}
export const logOutUser = ():ThunkActionType => {
    return (
        async (dispatch) => {
            let response = await statusMeAPI.logOut();
            if (response.data.resultCode === 0) {
                dispatch(actions.setAuthUserData(null, null, null, false));
            }
        }
    )
}
export const getAuthMe = ():ThunkActionType => {
    return (
      async  (dispatch) => {
            let response = await statusMeAPI.statusMe();
                if (response.resultCode === ResultCodesEnum.Success) {
                    const {id, email, login} = response.data
                    dispatch(actions.setAuthUserData(id, email, login, true));
                }
        }
    )
}
export default authReducer


export type InitialStateType = typeof initialState
type ActionType = InferActionsTypes<typeof actions>
type ThunkActionType = BaseThunkType<ActionType | ReturnType<typeof stopSubmit>>