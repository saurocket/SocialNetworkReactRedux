import clasess from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import AddMessage from "./AddMessage/AddMessage";
import React from "react";
import { InitialStateType } from '../../redux/messagesReducer';

type PropsType = {
    messagesPage: InitialStateType;
    sendMessage: (message:string) => void
}

const Dialogs:React.FC<PropsType> = ({messagesPage,sendMessage}) => {


    let dialogsBild = messagesPage.dialogs.map(d => {

        return (

            <Dialog name={d.name} id={d.id}/>
        )
    });
    let messagesBild = messagesPage.messages.map(m => {
        return(
            <Message message={m.message} key={m.id}/>
        )
    });

    return (
        <div>
            <div className={clasess.wrapper}>
                <ul className={clasess.dialogs}>
                    {dialogsBild}
                </ul>
                <ul className={clasess.messages}>
                    {messagesBild}
                </ul>
            </div>
            <AddMessage
                sendMessage={sendMessage}
            />

        </div>
    )

}
export default Dialogs;
