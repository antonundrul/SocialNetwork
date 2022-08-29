import React from 'react'
import styles from './User.module.css'
import userDefaultAvatar from '../../assets/images/userDefaultAvatar.png'
import {NavLink} from "react-router-dom";

let User = ({user,followingInProgress,unfollowUser,followUser}) => {

    return (
        <div className={styles.userItem}>
                <span>
                    <div>
                       <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null
                            ? user.photos.small
                            : userDefaultAvatar}/>
                       </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollowUser(user.id);
                                      }}>
                                Unfollow
                            </button>

                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          followUser(user.id);
                                      }}>
                                Follow
                            </button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.city'}</div>
                        <div>{'user.location.country'}</div>
                    </span>
                </span>
        </div>
    )
}

export default User;


