import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {sendMessage} from "../../redux/messagesReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";


const mapStateToProps = (state:AppStateType) => {
    return {
        messagesPage: state.messagesPage,
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs)

