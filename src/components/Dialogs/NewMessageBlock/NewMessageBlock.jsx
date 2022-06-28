import s from "../Dialogs.module.css";
import React from "react";

const NewMessageBlock = (props) => {

    const newMessageTextArea = React.createRef();

    let sendMessage = () => {
        debugger;
        let message = newMessageTextArea.current.value;
        alert(message);
    }

    return (
        <div>
            <div>
                <textarea ref={newMessageTextArea}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default NewMessageBlock;