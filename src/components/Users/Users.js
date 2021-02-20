import classes from './Users.module.css';
import addUser from "../../assets/images/addUser.png";
import React from "react";
import {NavLink} from "react-router-dom";
import Pagitanor from "../common/Paginator/Paginator";
import User from "./user/User";


const Users = ({currentPage, users, totalUsersCount, unFollow, follow,
                   pageSize, onPageChanged,follwingInProgress}) => {
    return (
        <div className={classes.wrapper}>
            <h2 className={classes.header}>Users</h2>
                <Pagitanor
                    currentPage={currentPage}
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                    onPageChanged={onPageChanged}
                />
            {
                users.map(u => {
                    return <User
                    key={u.key}
                    follwingInProgress={follwingInProgress}
                    follow={follow}
                    unFollow={unFollow}
                    user={u}
                    />
                })
            }
        </div>

    )

}
export default Users;