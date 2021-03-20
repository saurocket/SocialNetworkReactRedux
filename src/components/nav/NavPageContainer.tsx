import {connect} from "react-redux";
import Nav from "./Nav";
import {AppStateType} from "../../redux/redux-store";


const mapStateProps = (state:AppStateType) => {
    return {
        navPage: state.navPage
    }

}


const NavPageContainer = connect(mapStateProps)(Nav);

export default NavPageContainer