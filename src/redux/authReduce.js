import {statusMeAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/ET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return  {
                ...state,
                ...action.payload,
            };
        }
        default:  return state;
    }
}

 const setAuthUserData = (userId, email, login, isAuth) => {
    return ({
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    });
}

export const loginUser = (email, password, rememberMe) => {
    return (
        async (dispatch) => {
            let response = await statusMeAPI.login(email, password, rememberMe);
            if (response.data.resultCode === 0) {
                dispatch(getAuthMe());
            } else {
                const message = response.data.messages[0].length > 0 ?
                    response.data.messages[0] :
                    "some Error"
                ;
                dispatch(stopSubmit("login", {_error: message}));
            }
        }
    )
}
export const logOutUser = () => {
    return (
        async (dispatch) => {
            let response = await statusMeAPI.logOut();
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        }
    )
}
export const getAuthMe = () => {
    return (
      async  (dispatch) => {
            let response = await statusMeAPI.statusMe();
                if (response.resultCode === 0) {
                    const {id, email, login} = response.data
                    dispatch(setAuthUserData(id, email, login, true));
                }
        }
    )
}




export default authReducer