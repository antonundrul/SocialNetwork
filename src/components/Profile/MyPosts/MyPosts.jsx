import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    const newPostTextArea = React.createRef();

    let addPost = () => {
        props.dispatch({type: "ADD-POST"});
    }

    let onPostChange = () => {
        let text = newPostTextArea.current.value;
        let action = {type: "UPDATE-NEW-POST-TEXT", newText: text};
        props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <h3>myPosts</h3>
            <div>
                <div>
                    <textarea ref={newPostTextArea} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
