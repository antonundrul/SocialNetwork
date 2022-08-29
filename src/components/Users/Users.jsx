import React from 'react'
import Pagination from "../common/Pagination/Pagination";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    return (
        <div>
            <Pagination totalUsersCount={totalUsersCount}
                        pageSize={pageSize}
                        onPageChanged={onPageChanged}
                        currentPage={currentPage}/>
            {users.map(u => <User key={u.id}
                                  user={u}
                                  followingInProgress={props.followingInProgress}
                                  unfollowUser={props.unfollowUser}
                                  followUser={props.followUser}/>)
            }
        </div>
    )
}

export default Users;


