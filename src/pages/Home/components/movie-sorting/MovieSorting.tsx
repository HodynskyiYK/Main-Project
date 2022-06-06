import React, {FC} from 'react'
import styles from './MovieSorting.module.scss'

export const MovieSorting: FC = () => {

    return (
        <div className={styles.movieSorting}>
            <p className={styles.label}>Sort by</p>
            <p className={styles.selectedValue}>Release date</p>
            <ul className={styles.sortingList}>
                <li className={styles.sortingItem}>
                    <span className={styles.sortingValue}>Release date</span>
                </li>
            </ul>
        </div>
    )
}
