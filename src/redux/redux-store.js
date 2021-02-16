import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import newsReducer from "./newReducer";
import navReducer from "./navReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReduce";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";
let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    newsPage: newsReducer,
    navPage: navReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer

});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;