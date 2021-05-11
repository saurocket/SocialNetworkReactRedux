import {Redirect} from "react-router-dom";
import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

const mapStateToPropsForRedirect = (state: AppStateType) => {
    return{
        isAuth: state.auth.isAuth
    }
}
type  PropsType = { isAuth: boolean}
export  const withAuthRedirect = (Component: React.FC) => {

     class RedirectComponent extends React.Component<PropsType>{
         render(){
             if(!this.props.isAuth){
                 return <Redirect to="/login"/>
             }
             return (
                 <Component {...this.props}/>
             )

         }

     }


    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);



     return ConnectedAuthRedirectComponent;

}