import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    addPost,
    getCurrentProfile,
    getStatus,
    updateStatus
} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component{
    componentDidMount() {
            let userId = this.props.match.params.userId;
            if(!userId){
            userId = this.props.myId;
            if(!userId){
                this.props.history.push("/login")
            }
        }
       this.props.getCurrentProfile(userId);
       this.props.getStatus(userId);

    }
    render() {
    return (
            <Profile
                {...this.props}
            />
    )
    }
}
const mapStateProps = (state) => {
    return {
        profilePage: state.profilePage,
        status: state.profilePage.status,
        myId: state.auth.userId,
        isAuth: state.auth.isAuth
    }

}


export default compose(
    connect(mapStateProps, {addPost,getCurrentProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)
(ProfileContainer);

