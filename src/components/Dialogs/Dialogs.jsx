import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="User1" userID="1" />
                <DialogItem name="User2" userID="2" />
                <DialogItem name="User3" userID="3" />
                <DialogItem name="User4" userID="4" />
                <DialogItem name="User5" userID="5" />
            </div>
            <div className={s.messages}>
               <Message message="Message1"/>
               <Message message="Message2"/>
               <Message message="Message3"/>
               <Message message="Message4"/>
               <Message message="Message5"/>
               <Message message="Message6"/>
            </div>
        </div>
    );
}

export default Dialogs;