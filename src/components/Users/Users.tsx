import classes from './Users.module.css';

import React, {useEffect} from "react";

import Paginator from "../common/Paginator/Paginator";
import User from "./user/User";
import {UserType} from "../../types/types";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType, follow, getUsers, unFollow} from "../../redux/usersReducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFilter,
    getFollowingInProgress,
    getPageSize,
    getTotalUserCount,
    getUsersReselect
} from "../../redux/users-selectors";



export const Users: React.FC = () => {
    const dispatch = useDispatch()
    const totalUsersCount = useSelector(getTotalUserCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getFilter)
    const users = useSelector(getUsersReselect)
    const follwingInProgress = useSelector(getFollowingInProgress)

    const onPageChanged = (pageNumber: number) => {
       dispatch(getUsers(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsers(1, pageSize, filter))
    }
    const  follow = (userId: number) => {
        dispatch(follow(userId))
    }
    const  unFollow = (userId: number) => {
        dispatch(unFollow(userId))
    }
    useEffect(()=> {
       dispatch(getUsers(currentPage, pageSize, filter))
    },[])

    return (
        <div className={classes.wrapper}>
            <h2 className={classes.header}>Users</h2>
            <div>
                <UsersSearchForm onFilterChanged={onFilterChanged}/>
            </div>

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


