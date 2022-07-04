import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {

    /*  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} userID={d.id}/>)
      let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)
  */

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let sendMessage = () => {
                        store.dispatch(sendMessageActionCreator())
                    }

                    let onMessageChange = (text) => {
                        store.dispatch(updateNewMessageTextActionCreator(text));
                    }

                    return (<Dialogs updateNewMessageBody={onMessageChange}
                                     sendMessage={sendMessage}
                                     dialogsPage={store.getState().dialogsPage}/>)
                }

            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;