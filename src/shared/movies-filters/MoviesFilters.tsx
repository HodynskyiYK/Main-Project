import React, { FC, useEffect, useState } from 'react'
import classnames from 'classnames'
import {IFilter, IMoviesFilters} from './filtersTypes'
import styles from './MoviesFilters.module.scss'
import { useAction, useTypedSelector } from '../../hooks'

export const MoviesFilters: FC<IMoviesFilters> = ({filters}) => {
    const [activeFilter, setActiveFilter] = useState<string>('All')
    const {fetchMovies} = useAction()
    const {sortBy, filterBy} = useTypedSelector(state => state.movies)

    useEffect(() => {
        if (filterBy) {
            setActiveFilter(filterBy)
        }
    }, [filterBy])

    const filterMovies = (genre: string) => {
        if (genre !== activeFilter) {
            const genreForFilters = genre !== 'All' ? genre : ''
            fetchMovies(genreForFilters, sortBy)
            setActiveFilter(genre)
        }
    }

    return (
        <ul className={styles.filtersList}>{
            filters.map((filter: IFilter) => (
                <li key={filter.id} className={styles.filtersItem}>
                    <span
                        className={filter.value === activeFilter ?
                            classnames(styles.filterValue, styles.activeFilter) :
                            styles.filterValue}
                        onClick={() => filterMovies(filter.value)}
                    >{filter.name}</span>
                </li>
            ))
        }</ul>
    )
}
