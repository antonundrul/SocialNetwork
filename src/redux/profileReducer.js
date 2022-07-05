const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (newText) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: newText})


let initialState = {
    posts: [
        {id: 1, message: 'It\'s my first post', likesCount: 23},
        {id: 2, message: 'How are you?', likesCount: 10}
    ],
    newPostText: 'it-kamasutra.com'
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
        default:
            return state;
    }

}

export default profileReducer;