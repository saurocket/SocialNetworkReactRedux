import classes from './Paginator.module.css';
import React from "react";

const Pagitanor  = ({currentPage, totalUsersCount,
                   pageSize, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);

    }
    return (
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

    )

}
export default Pagitanor;