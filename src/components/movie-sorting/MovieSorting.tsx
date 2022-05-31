import React, {FC} from 'react'

export const MovieSorting: FC = () => {

    return (
        <div className="movie-sorting">
            <p className="label">Sort by</p>
            <p className="selected-value">Release date</p>
            <ul className="sorting-list">
                <li className="sorting-item">
                    <span className="sorting-value">Release date</span>
                </li>
            </ul>
        </div>
    )
}
