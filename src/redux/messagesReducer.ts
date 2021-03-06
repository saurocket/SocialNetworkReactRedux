import {InferActionsTypes} from "./redux-store";

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
let initialState = {
    messages: [
        {id: 1, message: 'Hi All'},
        {id: 2, message: 'My name'},
        {id: 3, message: 'Feeee'},
        {id: 4, message: 'Faaaa'},
        {id: 5, message: 'Good game'},
    ] as Array<MessageType>,
    dialogs: [
        {id: 1, name: 'Maria'},
        {id: 2, name: 'Yauheno'},
        {id: 3, name: 'Goga'},
        {id: 4, name: 'Petrt'},
    ] as Array<DialogType>,
}


const messagesReducer = (state=initialState, action: ActionsType)
    : InitialStateType => {
    switch (action.type) {
        case "ADD_MESSAGE": {
            const message = {id: 6, message: action.newMessage}
            return  {
                ...state,
                messages: [...state.messages, message],
            };
        }
        default:  return state;
    }
}
export default messagesReducer

export const actions = {
    sendMessage: (newMessage: string) => ({type: "ADD_MESSAGE", newMessage } as const)
}
export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
