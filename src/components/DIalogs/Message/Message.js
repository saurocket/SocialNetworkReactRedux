import classes from './Message.module.css';
import clasess from "../Dialogs.module.css";

const Message = ({message}) => {

    return (
        <li className={clasess.message}>{message}</li>
    )

}
export default Message;