import React, {FC} from 'react'
import classnames from 'classnames'
import {IFilter, IMoviesFilters} from './filtersTypes'
import styles from './MoviesFilters.module.scss'

export const MoviesFilters: FC<IMoviesFilters> = ({filters}) => {

    return (
        <ul className={styles.filtersList}>{
            filters.map((filter: IFilter) => (
                <li key={filter.id} className={styles.filtersItem}>
                    <span
                        className={filter.active ? classnames(styles.filterValue, styles.activeFilter) : styles.filterValue}
                    >{filter.name}</span>
                </li>
            ))
        }</ul>
    )
}
