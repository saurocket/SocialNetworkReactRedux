import {connect} from "react-redux";
import {
    follow, getUsers,
    unFollow
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import classes from "./Users.module.css"
import Spinner from "../common/spinner/Spinner";

import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsersReselect
} from "../../redux/users-selectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    users: Array<UserType>
    totalUsersCount: number
    follwingInProgress: Array<number>
}

type MapDispatchPropsType = {
    unFollow: (userId:number)=>void
    follow: (userId:number)=>void
    getUsers: (currentPage:number, pageSize:number) => void


}
type OwnPropsType = {
    pageTitle: string
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersAPIComponent extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <div className={classes.wrapperBox}>
                <h2>{this.props.pageTitle}</h2>
                    {this.props.isFetching ?  <Spinner/> : null}
                <Users
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}

                    // toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                    onPageChanged={this.onPageChanged}
                    unFollow={this.props.unFollow}
                    follow={this.props.follow}
                    follwingInProgress={this.props.follwingInProgress}
                />
           </div>
            )
    }
}

const mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        users: getUsersReselect(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        follwingInProgress: getFollowingInProgress(state),
    }
}
const mapDispatchObj= {
    follow,
    unFollow,
    getUsers
}

export  default  compose(
    //  <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchObj),
    // @ts-ignore
)(UsersAPIComponent)


