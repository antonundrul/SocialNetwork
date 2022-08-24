import {usersAPI} from "../../api/api";

const SHOW_MORE_USERS = 'SHOW-MORE-USERS';
const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOWING-IN-PROGRESS'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [  ],
    fake: 10
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case "FAKE": return {...state, fake:state.fake+1}
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

        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id=> id!=action.userId)
            }


        default:
            return state;
    }

}

export const showMoreUsers = () => ({type: SHOW_MORE_USERS})
export const followUserSuccess = (userId) => ({type: FOLLOW_USER, userId: userId})
export const unfollowUserSuccess = (userId) => ({type: UNFOLLOW_USER, userId: userId})
export const setUsers = (users) => ({type:SET_USERS, users: users})
export const setCurrentPage = (pageNumber) => ({type:SET_CURRENT_PAGE, pageNumber: pageNumber})
export const setTotalUsersCount = (totalCount) => ({type:SET_TOTAL_USERS_COUNT, totalCount: totalCount})
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching: isFetching})
export const toggleFollowingProgress = (followingInProgress, userId) =>
    ({type:TOGGLE_FOLLOWING_IN_PROGRESS, followingInProgress, userId})

export const requestUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    usersAPI.getUsers(currentPage, pageSize).then(data => {

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));

    });
}
export const followUser = (userId) => (dispatch) => {
   dispatch(toggleFollowingProgress(true,userId));
    usersAPI.followUser(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(followUserSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false,userId));
    });
}
export const unfollowUser = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true,userId));
    usersAPI.unfollowUser(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(unfollowUserSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false,userId));
    });

}

export default usersReducer;