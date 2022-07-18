import React, { FC, useEffect, useState } from 'react'
import styles from './MovieSorting.module.scss'
import { useAction, useTypedSelector } from '../../hooks'
import { MOVIE_SORTING_TYPES } from './movieSortingConstants'
import { IMovieSortingItem } from './movieSortingTypes'

export const MovieSorting: FC = () => {
    const [showSortingList, setShowSortingList] = useState<boolean>(false)
    const [activeSorting, setActiveSorting] = useState<string>('Release date')
    const {fetchMovies} = useAction()
    const {filterBy, sortBy} = useTypedSelector(state => state.movies)

    useEffect(() => {
        const activeSortBy = MOVIE_SORTING_TYPES.find((item) => item.value === sortBy)
        if (activeSortBy?.name) {
            setActiveSorting(activeSortBy.name)
        }
    }, [sortBy])

    const toggleSortingList = () => {
        setShowSortingList(!showSortingList)
    }

    const changeSortingType = (sortItem: IMovieSortingItem) => {
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
                                <div
                                    className={styles.sortingValue}
                                    onClick={() => changeSortingType(item)}
                                >
                                    {item.name}
                                </div>
                            </li>
                        ))
                    }</ul>
                )
            }
        </div>
    )
}
