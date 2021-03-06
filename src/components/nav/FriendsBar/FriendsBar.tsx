import clasess from './FriendsBar.module.css';
import React from "react";


type PropsType = {
    name:string
    lastName: string
    nick:string
}
const FriendsBar:React.FC<PropsType> = ({name, lastName, nick}) => {
    const shortLn = (lastName[0].toUpperCase()),
          shortN = (name[0].toUpperCase());
    return (
        <div className={clasess.wrapper}>
            <div className={clasess.box}>
                <div className={clasess.avatar}>

                </div>
                <div className={clasess.label}>
                    <p className={clasess.nick}>{nick}</p>
                    <span>{shortN}</span>
                    <span>{shortLn}</span>
                </div>
            </div>
        </div>
    )
}
export default FriendsBar;