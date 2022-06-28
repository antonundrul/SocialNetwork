import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    const newPostTextArea = React.createRef();

    let addPost = () => {
        debugger;
        let text = newPostTextArea.current.value;
        alert(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>myPosts</h3>
            <div>
                <div>
                    <textarea ref={newPostTextArea}></textarea>
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
