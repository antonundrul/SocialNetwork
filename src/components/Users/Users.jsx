import React from 'react'
import styles from './Users.module.css'
import userDefaultAvatar from '../../assets/images/userDefaultAvatar.png'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../redux/reduxStore";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1)
    }

    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p ? styles.selectedPage : ''}
                                     onClick={() => {
                                         props.onPageChanged(p)
                                     }}>{p}</span>
                    })

                }

            </div>
            {

                props.users.map(u => <div key={u.id} className={styles.userItem}>
                <span>
            <div>
               <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small != null
                    ? u.photos.small
                    : userDefaultAvatar}/>
               </NavLink>
            </div>
            <div>
                {u.followed
                    ? <button onClick={() => {


                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                            {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": API_KEY
                                }
                            })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollowUser(u.id)
                                }
                            });


                    }}>Unfollow</button>
                    : <button onClick={() => {

                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                            {},
                            {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": API_KEY
                                }
                            })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.followUser(u.id)
                                }
                            });

                    }}>Follow</button>}
            </div>
        </span>
                        <span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{'u.location.city'}</div>
                <div>{'u.location.country'}</div>
            </span>
        </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users;


