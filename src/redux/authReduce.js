import {statusMeAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

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
        (dispatch) => {
            statusMeAPI.login(email, password, rememberMe).then(respons => {



                if (respons.data.resultCode === 0){
                    dispatch(getAuthMe());
                }else{
                    const message = respons.data.messages[0].length > 0 ?
                        respons.data.messages[0]:
                        "some Error"
                    ;
                    dispatch(stopSubmit("login", {_error: message}));
                }
            })
        }
    )
}
export const logOutUser= () => {
    return (
        (dispatch) => {
            statusMeAPI.logOut().then(respons => {
                if (respons.data.resultCode === 0){
                    dispatch(setAuthUserData(null, null, null, false));
                }
            })
        }
    )
}
export const getAuthMe = () => {
    return (
        (dispatch) => {
            return  statusMeAPI.statusMe().then(data=> {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login, true));
                }
            });

        }
    )
}




export default authReducer