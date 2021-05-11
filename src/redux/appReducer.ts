import {getAuthMe} from "./authReduce";
import {ThunkAction} from "redux-thunk";
import {AppStateType, BaseThunkType, InferActionsTypes} from "./redux-store";

const initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action:ActionType):InitialStateType => {
    switch (action.type) {
        case "SET_INITIALIZED_APP": {
            return  {
                ...state,
                initialized: true
            };
        }
        default:  return state;
    }
}

const actions = {
  initializedSuccess: () => ({type: "SET_INITIALIZED_APP"} as const),
}


export const initializeApp = ()=> {
    return (
        (dispatch:any) => {
          let promise = dispatch(getAuthMe());
          promise.then(() => {
              dispatch(actions.initializedSuccess());
          })
        }
    )
}

export type InitialStateType = typeof initialState;
type ActionType = InferActionsTypes<typeof actions>

export default appReducer