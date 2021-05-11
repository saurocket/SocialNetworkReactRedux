import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {actions} from "../../redux/messagesReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
;
const {sendMessage} = actions

const mapStateToProps = (state:AppStateType) => {
    return {
        messagesPage: state.messagesPage,
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs) as React.ComponentType

