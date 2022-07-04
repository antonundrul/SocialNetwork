import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let onAddPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    }

                    return <MyPosts updateNewPostText={onPostChange}
                                    addPost={onAddPost}
                                    newPostText={store.getState().profilePage.newPostText}
                                    posts={store.getState().profilePage.posts}/>
                }

            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;
