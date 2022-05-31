import React, {FC} from 'react'
import {IFilter, IMoviesFilters} from './filtersTypes'

export const MoviesFilters: FC<IMoviesFilters> = ({filters}) => {

    return (
        <ul className="filters-list">{
            filters.map((filter: IFilter) => (
                <li key={filter.id} className="filters-item">
                    <span
                        className={filter.active ? 'filter-value active' : 'filter-value'}
                    >{filter.name}</span>
                </li>
            ))
        }</ul>
    )
}
