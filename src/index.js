import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./redux/redux-store";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import MainApp from "./App";


ReactDOM.render(
   <MainApp/>,
    document.getElementById('root')
);


window.store = store;
