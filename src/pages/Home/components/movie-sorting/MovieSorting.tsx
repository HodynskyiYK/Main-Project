import React, { FC, useState } from 'react'
import styles from './MovieSorting.module.scss'
import { useAction, useTypedSelector } from '../../../../hooks'
import { MOVIE_SORTING_TYPES } from './movieSortingConstants'

export const MovieSorting: FC = () => {
    const [showSortingList, setShowSortingList] = useState<boolean>(false)
    const [activeSorting, setActiveSorting] = useState<string>('Release date')
    const {fetchMovies} = useAction()
    const {filterBy} = useTypedSelector(state => state.movies)

    const toggleSortingList = () => {
        setShowSortingList(!showSortingList)
    }

    const changeSortingType = (sortItem: any) => {
        if (sortItem.name !== activeSorting) {
            fetchMovies(filterBy, sortItem.value)
            setActiveSorting(sortItem.name)
        }
        toggleSortingList()
    }

    return (
        <div className={styles.movieSorting}>
            <p className={styles.label}>Sort by</p>
            <p
                className={styles.selectedValue}
                onClick={toggleSortingList}
            >{activeSorting}</p>
            {
                showSortingList && (
                    <ul className={styles.sortingList}>{
                        MOVIE_SORTING_TYPES.map(item => (
                            <li
                                className={styles.sortingItem}
                                key={item.id}
                            >
                                <span
                                    className={styles.sortingValue}
                                    onClick={() => changeSortingType(item)}
                                >{item.name}</span>
                            </li>
                        ))
                    }</ul>
                )
            }
        </div>
    )
}
