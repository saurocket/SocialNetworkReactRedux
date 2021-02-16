import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logOutUser} from "../../redux/authReduce";
import {compose} from "redux";



class HeaderContainer extends React.Component {

    render() {
        return <Header
            {...this.props}
        />
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email,
        userId: state.auth.userId
    }
}




const NavPageContainer = connect(mapStateToProps, {logOutUser})(HeaderContainer)
export default NavPageContainer