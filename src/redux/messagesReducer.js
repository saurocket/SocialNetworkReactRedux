
const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
    messages: [
        {id: 1, message: 'Hi All'},
        {id: 2, message: 'My name'},
        {id: 3, message: 'Feeee'},
        {id: 4, message: 'Faaaa'},
        {id: 5, message: 'Good game'},
    ],
    dialogs: [
        {id: 1, name: 'Maria'},
        {id: 2, name: 'Yauheno'},
        {id: 3, name: 'Goga'},
        {id: 4, name: 'Petrt'},
    ],
}

export const messagesReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            const message = {id: 6, message: action.newMessage}
            return  {
                ...state,
                messages: [...state.messages, message]
            };
        }
        default:  return state;
    }
}

export const sendMessage = (newMessage) => {
    return ({type: ADD_MESSAGE, newMessage });
}

export default messagesReducer