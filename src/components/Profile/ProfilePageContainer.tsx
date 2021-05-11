import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    getCurrentProfile,
    getStatus, ProfileType, saveProfile, updatePhoto,
    updateStatus, actions
} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";

const {addPost} = actions

type MapStateToPropsType  = {
    profilePage: any
    status: string
    myId: number | null
    isAuth: boolean
    photo: any
}
type MapDispatchToPropsType = {
    addPost: (post:string)=>void
    getCurrentProfile: (currentPage: number) => void
    getStatus: (userId:number) => void
    updateStatus: (status: string) => void
    updatePhoto: (obj: object) => void
    saveProfile: (obj: ProfileType) => void
}

type PropsType = MapDispatchToPropsType & MapStateToPropsType

class ProfileContainer extends React.Component<PropsType> {
    refreshProfile() {

        // @ts-ignore
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.myId;
            if (!userId) {
                // @ts-ignore
                this.props.history.push("/login")
            }
        }
        this.props.getCurrentProfile(userId);
        this.props.getStatus(userId);
    }


    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps:PropsType, prevState:any, snapshot:any) {
        // @ts-ignore
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }

    }

    render() {
        return (
            // @ts-ignore
            <Profile
                {...this.props}
                // @ts-ignore
                isOwner={!this.props.match.params.userId}
            />
        )
    }
}

const mapStateProps = (state: AppStateType):MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        status: state.profilePage.status,
        myId: state.auth.userId,
        isAuth: state.auth.isAuth,
        photo: state.profilePage.profile?.photos
    }

}


export default compose(
    connect(mapStateProps, {addPost, getCurrentProfile, getStatus, updateStatus, updatePhoto, saveProfile}),
    withRouter,
)
(ProfileContainer) as React.ComponentType;

