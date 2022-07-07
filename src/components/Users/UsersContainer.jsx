import {connect} from "react-redux";
import Users from "./Users";
import {
    followUserActionCreator,
    setCurrentPageActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unfollowUserActionCreator
} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
return {
    followUser: (userId) => {
        dispatch(followUserActionCreator(userId))
    },
    unfollowUser: (userId) => {
        dispatch(unfollowUserActionCreator(userId))
    },
    setUsers: (users) => {
        dispatch(setUsersActionCreator(users))
    },
    setCurrentPage: (pageNumber) => {
        dispatch(setCurrentPageActionCreator(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
        dispatch(setTotalUsersCountActionCreator(totalCount))
    }

}
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;