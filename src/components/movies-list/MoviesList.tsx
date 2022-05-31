import React, {FC} from 'react'
import {IMoviesList} from './moviesTypes'
import {MovieCard} from './MovieCard'

export const MoviesList: FC<IMoviesList> = ({moviesList}) => {

    return (
        <>
            <div className="movies-counter">
                <p>
                    <b>39</b> movies found
                </p>
            </div>
            <div className="movies-list row">{
                moviesList.map((movieItem) => (
                    <MovieCard key={movieItem.id} movieItem={movieItem} />
                ))
            }</div>
        </>
    )
}
