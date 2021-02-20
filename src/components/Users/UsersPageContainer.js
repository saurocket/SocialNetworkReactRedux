import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    toggleIsFollowingProgress,
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
    getTotalUserCount, getUsersAll, getUsersReselect
} from "../../redux/users-selectors";



class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return (
            <div className={classes.wrapperBox}>
                    {this.props.isFetching ?  <Spinner/> : null}
                <Users
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    unFollow={this.props.unFollow}
                    follow={this.props.follow}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                    follwingInProgress={this.props.follwingInProgress}
                />
           </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersReselect(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        follwingInProgress: getFollowingInProgress(state),
    }
}

const mapDispatchObj = {
    follow,
    unFollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers

}

export  default  compose(
    connect(mapStateToProps, mapDispatchObj),
)(UsersAPIComponent)


