import React, { FC } from 'react'
import styles from './EmptyMovieList.module.scss'

export const EmptyMovieList: FC = () => {
    return (
        <div className={styles.emptyList}>
            <p className="h1">WE WERE SEARCHING, SEARCHING, BUT NOT FOUND.</p>
            <p>Try to change the request, or choose something interesting from our selections</p>
        </div>
    )
}
