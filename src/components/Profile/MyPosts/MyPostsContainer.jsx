import React from "react";
import {addPost, updateNewPostText} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost,updateNewPostText})(MyPosts);


export default MyPostsContainer;
