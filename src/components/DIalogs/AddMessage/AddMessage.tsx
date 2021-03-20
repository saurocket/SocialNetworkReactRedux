import React from 'react';
import clasess from './AddMessage.module.css';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControll/FormsControll";
import {maxLengthCreator, required} from "../../../utils/validators/validators";


type PropsType = {
    sendMessage: (message:string) => void
}

const AddMessage:React.FC<PropsType> = ({sendMessage}) => {
    const onSubmit= (value:any) => {
        sendMessage(value.newMessageBody)
    }
    const maxLength30 = maxLengthCreator(30)

    type MessageFormPropsType = {
        handleSubmit: () => void
    }

    const MessageForm:React.FC<MessageFormPropsType> = (props) => {
        return (
            <form onSubmit={props.handleSubmit} className={clasess.post}>
                <div>
                    <Field
                        className={clasess.text}
                        placeholder='type_here'
                        name="newMessageBody"
                        component={Textarea}
                        validate={[required, maxLength30]}
                    />
                </div>

                <button className={clasess.btn}
                >Message</button>
            </form>
        )
    }

    const MesagesReduxFormContainer  = reduxForm({
        form: 'dialogAddMessageForm',
        // @ts-ignore
    })(MessageForm);
    return (
        <div className={clasess.wrapper}>
            <h2 className={clasess.header}>Message</h2>
            <MesagesReduxFormContainer
                onSubmit={onSubmit}
            />
        </div>
    )
}


export default AddMessage;