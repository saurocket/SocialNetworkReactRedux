import React from 'react';
import clasess from './AddMessage.module.css';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControll/FormsControll";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const AddMessage = ({sendMessage}) => {
    const onSubmit= (value) => {
        sendMessage(value.newMessageBody)
    }
    const maxLength30 = maxLengthCreator(30)
    const MessageForm = (props) => {
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