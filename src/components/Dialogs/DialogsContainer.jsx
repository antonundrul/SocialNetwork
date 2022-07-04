import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import NewMessageBlock from "./NewMessageBlock/NewMessageBlock";
import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";


const DialogsContainer = (props) => {

  /*  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} userID={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)
*/
    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <Dialogs updateNewMessageBody={onMessageChange}
                 sendMessage={sendMessage}
                 dialogsPage={props.store.getState().dialogsPage}/>
    );
}

export default DialogsContainer;