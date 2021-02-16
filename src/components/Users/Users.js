import classes from './Users.module.css';
import addUser from "../../assets/images/addUser.png";
import React from "react";
import {NavLink} from "react-router-dom";


const Users = ({currentPage, users, totalUsersCount, unFollow, follow,
                   pageSize, onPageChanged,follwingInProgress}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (
        <div className={classes.wrapper}>
            <h2 className={classes.header}>Users</h2>
            <div className={classes.btnWrapper}>
                {
                    pages.map(p => {
                        return <span onClick={(e) => {
                            onPageChanged(p)
                        }}
                                     className={currentPage === p
                                         ? classes.addUserActive : classes.addUsers}>{p}</span>
                    })

                }
            </div>

            {
                users.map(u => {
                    return (
                        <div className={classes.userWrapper} key={u.id}>
                            <div>
                                <NavLink to={"/profile/" + u.id}>
                                    <div className={classes.avatar}>
                                        <img src={u.photos.small != null ? u.photos.small : addUser}/>
                                    </div>
                                </NavLink>
                                {u.followed
                                    ? <button disabled={follwingInProgress.some(id => id === u.id)} onClick={() => {
                                        unFollow(u.id);
                                    }} className={classes.btn}>Followed</button>
                                    : <button disabled={follwingInProgress.some(id => id === u.id)} onClick={() => {
                                        follow(u.id)
                                    }} className={classes.btn}>unFollowed</button>
                                }

                            </div>
                            <div className={classes.userInformation}>
                                <div>
                                    <span>{u.name}</span>

                                    <p>{u.status}</p>
                                </div>
                                <div>
                                    <span>{"u.location.county"}</span>
                                    <span>{"u.location.city"}</span>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>

    )

}
export default Users;