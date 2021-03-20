import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logOutUser} from "../../redux/authReduce";
import {AppStateType} from "../../redux/redux-store";


type PropsType = {
    isAuth: boolean
    login: string
    email: string
    userId: number
    logOutUser: () => void
}

class HeaderContainer extends React.Component<PropsType> {

    render() {
        return <Header
            {...this.props}
        />
    }
}
const mapStateToProps = (state:AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email,
        userId: state.auth.userId
    }
}




// @ts-ignore
const NavPageContainer = connect(mapStateToProps, {logOutUser})(HeaderContainer)
export default NavPageContainer