import classes from './Users.module.css';

import React from "react";

import Paginator from "../common/Paginator/Paginator";
import User from "./user/User";
import {UserType} from "../../types/types";

type UsersProps = {
    currentPage: number
    users: Array<UserType>
    totalUsersCount: number
    unFollow: (userId:number)=>void
    follow: (userId:number)=>void
    pageSize:number
    onPageChanged: (page:number)=>void
    follwingInProgress: Array<number>
}

const Users:React.FC<UsersProps> = ({currentPage, users, totalUsersCount, unFollow, follow,
                   pageSize, onPageChanged,follwingInProgress}) => {
    return (
        <div className={classes.wrapper}>
            <h2 className={classes.header}>Users</h2>
                <Paginator
                    currentPage={currentPage}
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                    onPageChanged={onPageChanged}
                />
            {
                users.map(u => {
                    return <User
                    key={u.id}
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