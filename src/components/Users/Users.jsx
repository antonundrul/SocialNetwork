import React from 'react'
import s from './Users.module.css'
import axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        alert('request will be now')
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            });
        alert('end request')
    }

    render() {
        return <div>
            {/*<button onClick={this.getUsers}>Get users</button>*/}
            {
                this.props.users.map(u => <div key={u.id} className={s.userItem}>
                <span>
            <div>
                <img src={u.photos.small != null
                    ? u.photos.small
                    : 'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png'}/>
            </div>
            <div>
                {u.followed ? <button onClick={() => {
                        this.props.unfollowUser(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        this.props.followUser(u.id)
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
    }
}

export default Users;