import s from "../Dialogs.module.css";
import React from "react";
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../../redux/state";

const NewMessageBlock = (props) => {

    const newMessageTextArea = React.createRef();

    let sendMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = () => {
        let text = newMessageTextArea.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div>
            <div>
                <textarea ref={newMessageTextArea} value={props.newMessageText} onChange={onMessageChange}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default NewMessageBlock;