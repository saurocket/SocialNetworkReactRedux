import classes from "../Users.module.css";
import {NavLink} from "react-router-dom";
import usersPhoto from "../../../assets/images/addUser.png";
import {UserType} from "../../../types/types";
import React from "react";


type TypeProps = {
    unFollow: (userId:number)=>void
    follow: (userId:number)=>void
    follwingInProgress: Array<number>
    user: UserType

}
const User:React.FC<TypeProps> = ({unFollow, follow,follwingInProgress, user})  => {
        return(
            <div className={classes.userWrapper} key={user.id}>
                <div>
                    <NavLink to={"/profile/" + user.id}>
                        <div className={classes.avatar}>
                            <img src={user.photos.small != null ? user.photos.small : usersPhoto}/>
                        </div>
                    </NavLink>
                    {user.followed
                        ? <button disabled={follwingInProgress.some(id => id ===user.id)} onClick={() => {
                            unFollow(user.id);
                        }} className={classes.btn}>Followed</button>
                        : <button disabled={follwingInProgress.some(id => id ===user.id)} onClick={() => {
                            follow(user.id)
                        }} className={classes.btn}>unFollowed</button>
                    }

                </div>
                <div className={classes.userInformation}>
                    <div>
                        <span>{user.name}</span>
                        <p>{user.status}</p>
                    </div>
                    <div>
                        <span>{"u.location.county"}</span>
                        <span>{"u.location.city"}</span>
                    </div>
                </div>
            </div>
        )
}
export default User