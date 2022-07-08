const SHOW_MORE_USERS = 'SHOW-MORE-USERS';
const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

export const showMoreUsers = () => ({type: SHOW_MORE_USERS})

export const followUser = (userId) =>
    ({type: FOLLOW_USER, userId: userId})

export const unfollowUser = (userId) =>
    ({type: UNFOLLOW_USER, userId: userId})

export const setUsers = (users) =>
    ({type:SET_USERS, users: users})

export const setCurrentPage = (pageNumber) =>
    ({type:SET_CURRENT_PAGE, pageNumber: pageNumber})

export const setTotalUsersCount = (totalCount) =>
    ({type:SET_TOTAL_USERS_COUNT, totalCount: totalCount})

export const toggleIsFetching = (isFetching) =>
    ({type:TOGGLE_IS_FETCHING, isFetching: isFetching})


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false

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

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }


        default:
            return state;
    }

}

export default usersReducer;