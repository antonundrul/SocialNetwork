import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {CustomFormElement} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength20 = maxLengthCreator(20)

const Textarea = CustomFormElement('textarea')
const SendMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newMessage'}
                       placeholder='Enter your message'
                       validate={[required, maxLength20]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const SendMessageReduxForm = reduxForm({form: 'dialogSendMessageForm'})(SendMessageForm);

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} userID={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    let sendMessage = (values) => {
        props.sendMessage(values.newMessage);
    }

    if (!props.isAuth) return <Navigate to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <SendMessageReduxForm onSubmit={sendMessage}/>
            </div>
        </div>
    );
}

export default Dialogs;