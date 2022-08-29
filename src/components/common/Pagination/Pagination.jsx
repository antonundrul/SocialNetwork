import React from 'react'
import styles from './Pagination.module.css'

let Pagination = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []

    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1)
    }

    return (
        <div>
            {
                pages.map(p => {
                    return <span key={p} className={currentPage === p ? styles.selectedPage : ''}
                                 onClick={() => {
                                     onPageChanged(p)
                                 }}> {p} </span>
                })
            }
        </div>
    )
}

export default Pagination;


