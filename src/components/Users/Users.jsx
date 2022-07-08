import React from 'react'
import styles from './Users.module.css'
import userDefaultAvatar from '../../assets/images/userDefaultAvatar.png'

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 0; i < 15; i++) {
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
                <img src={u.photos.small != null
                    ? u.photos.small
                    : userDefaultAvatar}/>
            </div>
            <div>
                {u.followed ? <button onClick={() => {
                        props.unfollowUser(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.followUser(u.id)
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


