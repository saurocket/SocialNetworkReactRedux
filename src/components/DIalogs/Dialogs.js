import clasess from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import AddMessage from "./AddMessage/AddMessage";
import React from "react";


const Dialogs = ({messagesPage,sendMessage}) => {


    let dialogsBild = messagesPage.dialogs.map(d => {
        return (
            <Dialog name={d.name} key={d.id}/>
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
