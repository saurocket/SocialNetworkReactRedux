import classes from './Message.module.css';
import clasess from "../Dialogs.module.css";
import React from "react";

type PropsType = {
    message: string
}
const Message:React.FC<PropsType> = ({message}) => {

    return (
        <li className={clasess.message}>{message}</li>
    )

}
export default Message;