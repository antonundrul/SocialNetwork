import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {CustomFormElement} from "../../common/FormsControls/FormsControls";

const maxLength20 = maxLengthCreator(20);
const Textarea = CustomFormElement('textarea')
const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostText"} validate={[required, maxLength20]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({form: 'AddNewPostForm'})(AddNewPostForm)

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let addPost = (value) => {
        props.addPost(value.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>myPosts</h3>
            <AddNewPostReduxForm onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
