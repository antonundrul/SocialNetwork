import s from './Users.module.css'
import axios from "axios";


let Users = (props) => {
    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                debugger;
                props.setUsers(response.data.items)
            });

      /*  props.setUsers([
            {
                id: 1,
                photoUrl: 'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png',
                fullName: 'Anton U',
                status: 'I\'m a boss',
                location: {city: 'Minsk', country: 'Belarus'},
                followed: false
            },
            {
                id: 2,
                photoUrl: 'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png',
                fullName: 'Marina L',
                status: 'I\'m a boss\'s madam',
                location: {city: 'Minsk', country: 'Belarus'},
                followed: true
            },
            {
                id: 3,
                photoUrl: 'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png',
                fullName: 'Vovan M',
                status: 'I\'m a friend',
                location: {city: 'Gomel', country: 'Belarus'},
                followed: false
            },
            {
                id: 4,
                photoUrl: 'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png',
                fullName: 'Lesha K',
                status: 'I\'m a business analyst',
                location: {city: 'Grodno', country: 'Belarus'},
                followed: true
            },
            {
                id: 5,
                photoUrl: 'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png',
                fullName: 'Maks Sh',
                status: 'I\'m a good boy',
                location: {city: 'Lida', country: 'Belarus'},
                followed: false
            }
        ]);*/
    }
    let users = props.users.map(u => <div key={u.id} className={s.userItem}>
        <span>
            <div>
                <img src={u.photos.small != null ? u.photos.small : 'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png'}/>
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
    </div>)

    return (
        <div>{users}</div>
    )
}

export default Users;