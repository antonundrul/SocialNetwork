import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            myPosts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post message={"It's my first post"}/>
                <Post message={"How are you?"}/>
            </div>
        </div>
    );
}

export default MyPosts;
