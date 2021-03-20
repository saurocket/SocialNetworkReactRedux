
import {getAuthMe} from "./authReduce";
const SET_INITIALIZED_APP = 'SET_INITIALIZED_APP';

export type InitialStateType = {
    initialized: boolean
}
let initialState: InitialStateType = {
    initialized: false
}
export const appReducer = (state = initialState, action: any):InitialStateType => {
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
type InitializedSuccessActionType = {
    type: typeof SET_INITIALIZED_APP //
}
const initializedSuccess = (): InitializedSuccessActionType => ({type: SET_INITIALIZED_APP});
export const initializeApp = () => {
    return (
        (dispatch:any) => {
          let promise = dispatch(getAuthMe());
          promise.then(() => {
              dispatch(initializedSuccess());
          })
        }
    )
}




export default appReducer