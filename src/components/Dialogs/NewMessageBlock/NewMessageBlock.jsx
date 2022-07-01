import s from "../Dialogs.module.css";
import React from "react";
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../../redux/dialogsReducer";

const NewMessageBlock = (props) => {

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div>
            <div>
                <textarea value={props.newMessageText}
                          onChange={onMessageChange}
                          placeholder='Enter your message'/>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default NewMessageBlock;