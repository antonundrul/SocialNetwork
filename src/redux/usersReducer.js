const SHOW_MORE_USERS = 'SHOW-MORE-USERS';
const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET_USERS';

export const showMoreUsersActionCreator = () => ({type: SHOW_MORE_USERS})

export const followUserActionCreator = (userId) =>
    ({type: FOLLOW_USER, userId: userId})

export const unfollowUserActionCreator = (userId) =>
    ({type: UNFOLLOW_USER, userId: userId})

export const setUsersActionCreator = (users) =>
    ({type:SET_USERS, users: users})


let initialState = {
    users: [
        /*
*/
    ]
}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_MORE_USERS:


        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.userId === u.id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.userId === u.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }


        default:
            return state;
    }

}

export default usersReducer;