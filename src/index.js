import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./redux/redux-store";
import MainApp from "./App";


ReactDOM.render(
   <MainApp/>,
    document.getElementById('root')
);


window.store = store;
