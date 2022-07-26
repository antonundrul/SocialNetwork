import React from 'react'
import {connect} from 'react-redux';
import {
    followUser,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollowUser
} from '../../redux/usersReducer';
import Users from './Users';
import axios from 'axios';
import Preloader from "../common/Preloader/Preloader";
import {API_KEY} from "../../redux/reduxStore";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {withCredentials: true,
            headers: {
                "api-key": API_KEY
            }})
            .then(response => {
                debugger
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);

            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true,
            headers: {
                "api-key": API_KEY
            }})
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/>
                : <Users totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged}
                         users={this.props.users}
                         unfollowUser={this.props.unfollowUser}
                         followUser={this.props.followUser}
                         isFetching={this.props.isFetching}
                />
            }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
        followUser,
        unfollowUser,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching
    })(UsersContainer);