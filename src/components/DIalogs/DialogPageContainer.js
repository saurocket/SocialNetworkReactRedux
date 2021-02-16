import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {sendMessage} from "../../redux/messagesReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs)

