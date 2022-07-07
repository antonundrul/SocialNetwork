const SHOW_MORE_USERS = 'SHOW-MORE-USERS';
const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

export const showMoreUsersActionCreator = () => ({type: SHOW_MORE_USERS})

export const followUserActionCreator = (userId) =>
    ({type: FOLLOW_USER, userId: userId})

export const unfollowUserActionCreator = (userId) =>
    ({type: UNFOLLOW_USER, userId: userId})

export const setUsersActionCreator = (users) =>
    ({type:SET_USERS, users: users})

export const setCurrentPageActionCreator = (pageNumber) =>
    ({type:SET_CURRENT_PAGE, pageNumber: pageNumber})

export const setTotalUsersCountActionCreator = (totalCount) =>
    ({type:SET_TOTAL_USERS_COUNT, totalCount: totalCount})


let initialState = {
    users: [],
    pageSize: 7,
    totalUsersCount: 17,
    currentPage: 1

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
                users: [...action.users]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }


        default:
            return state;
    }

}

export default usersReducer;