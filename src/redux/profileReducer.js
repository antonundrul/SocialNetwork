import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const UPDATE_STATUS = 'UPDATE-STATUS'

let initialState = {
    posts: [
        {id: 1, message: 'It\'s my first post', likesCount: 23},
        {id: 2, message: 'How are you?', likesCount: 10}
    ],
    profile: null,
    newPostText: 'it-kamasutra.com',
    status: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts,
                    {
                        id: 5,
                        message: state.newPostText,
                        likesCount: 0
                    }
                ],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
            newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case UPDATE_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText: newText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile:profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data));
    });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
        debugger
        if(data.resultCode===0)
        dispatch(setStatus(status));
    });
}

export default profileReducer;

