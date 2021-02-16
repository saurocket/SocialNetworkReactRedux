import {statusMeAPI} from "../API/api";
import {stopSubmit} from "redux-form";
import {getAuthMe} from "./authReduce";

const SET_INITIALIZED_APP = 'SET_INITIALIZED_APP';

let initialState = {
    initialized: false

}
export const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED_APP: {
            return  {
                ...state,
                initialized: true
            };
        }
        default:  return state;
    }
}

const initializedSuccess = () => {
    return ({
        type: SET_INITIALIZED_APP,
    });
}

export const initializeApp = () => {
    return (
        (dispatch) => {
          let promise = dispatch(getAuthMe());

          promise.then(() => {
              dispatch(initializedSuccess());
          })


        }
    )
}




export default appReducer