import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    addPost,
    getCurrentProfile,
    getStatus, saveProfile, updatePhoto,
    updateStatus
} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.myId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getCurrentProfile(userId);
        this.props.getStatus(userId);
    }


    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }

    }

    render() {
        return (
            <Profile
                {...this.props}
                isOwner={!this.props.match.params.userId}
            />
        )
    }
}

const mapStateProps = (state) => {
    return {
        profilePage: state.profilePage,
        status: state.profilePage.status,
        myId: state.auth.userId,
        isAuth: state.auth.isAuth,
        photo: state.profilePage.photo
    }

}


export default compose(
    connect(mapStateProps, {addPost, getCurrentProfile, getStatus, updateStatus, updatePhoto, saveProfile}),
    withRouter,
)
(ProfileContainer);

