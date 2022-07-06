import {connect} from "react-redux";
import Users from "./Users";
import {followUserActionCreator, setUsersActionCreator, unfollowUserActionCreator} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {users: state.usersPage.users}
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
    }
}
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;