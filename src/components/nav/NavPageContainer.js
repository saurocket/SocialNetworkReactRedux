import {connect} from "react-redux";
import Nav from "./Nav";


const mapStateProps = (state) => {
    return {
        navPage: state.navPage
    }

}


const NavPageContainer = connect(mapStateProps)(Nav);

export default NavPageContainer