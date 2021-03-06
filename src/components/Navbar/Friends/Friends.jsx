import s from "./Friends.module.css"
import FriendItem from "./FriendItem/FriendItem";
import React from "react";

const Friends = (props) => {


    let friendsElements = props.friends.map(friend => <FriendItem friend={friend}/>);

    return (
        <div>
            <h3>Friends</h3>
            <div className={s.friendsBlock}>
                {friendsElements}
            </div>
        </div>
    );
}

export default Friends;
