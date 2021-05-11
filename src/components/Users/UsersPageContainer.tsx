import {useSelector} from "react-redux";
import React from "react";

import classes from "./Users.module.css"
import Spinner from "../common/spinner/Spinner";
import {getIsFetching,} from "../../redux/users-selectors";
import {Users} from "./Users";

type UserPageType = {
    pageTitle: string
}
export const UsersPage:React.FC<UserPageType> = (props) => {
    const isFetching = useSelector(getIsFetching)
    return (
        <div className={classes.wrapperBox}>
            <h2>{props.pageTitle}</h2>
            {isFetching ?  <Spinner/> : null}
            <Users/>
        </div>
    )
}




