import React from 'react'
import styles from './Users.module.css'
import axios from "axios";
import {setCurrentPageActionCreator} from "../../redux/usersReducer";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                debugger
                this.props.setUsers(response.data.items)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)

        let pages =[]

        for(let i=0; i<pagesCount; i++){
            pages.push(i+1)
        }


        return <div>
          <div>

              {
                  pages.map(p => {
                  return    <span className={this.props.currentPage===p ? styles.selectedPage : ''}
                  onClick={()=>{ this.onPageChanged(p) } }>{p}</span>
                  })

              }

          </div>
            {

                this.props.users.map(u => <div key={u.id} className={styles.userItem}>
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