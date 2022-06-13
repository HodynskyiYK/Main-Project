import React, {FC} from 'react'
import {IMoviesList} from './moviesListTypes'
import classnames from 'classnames'
import {MovieCard} from '../movie-card'
import { useMovieModalContext } from '../../../../context/movie-modal-context'
import { MovieModalForm } from '../movie-modal-form'
import { DeleteMovieModal } from '../delete-movie-modal'
import { MOVIE_INFORMATION } from './moviesListConstans'
import { useMovieDetailsContext } from '../../../../context/movie-details-context'
import styles from './MoviesList.module.scss'

export const MoviesList: FC<IMoviesList> = ({moviesList}) => {
    const {
        editMovieModalState,
        deleteMovieModalState,
        showEditMovieModal,
        showDeleteMovieModal
    } = useMovieModalContext()

    const {getMovieDetails} = useMovieDetailsContext()

    return (
        <>
            <div className={styles.moviesCounter}>
                <p>
                    <b>39</b> movies found
                </p>
            </div>
            <div className={classnames('row', styles.moviesList)}>{
                moviesList.map((movieItem) => (
                    <MovieCard
                        key={movieItem.id}
                        movieItem={movieItem}
                        editMovie={showEditMovieModal}
                        deleteMovie={showDeleteMovieModal}
                        getMovieDetails={getMovieDetails}
                    />
                ))
            }</div>
            {
                editMovieModalState && <MovieModalForm modalName={'Edit movie'} formValues={MOVIE_INFORMATION} />
            }
            {
                deleteMovieModalState && <DeleteMovieModal />
            }
        </>
    )
}
