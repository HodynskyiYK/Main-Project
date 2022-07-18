import React, { FC, useEffect, useState } from 'react'
import classnames from 'classnames'
import {MovieCard} from '../movie-card'
import { useMovieModalContext } from '../../context/movie-modal-context'
import { MovieModalForm } from '../movie-modal-form'
import { DeleteMovieModal } from '../delete-movie-modal'
import { MOVIE_INFORMATION } from './moviesListConstans'
import { useMovieDetailsContext } from '../../context/movie-details-context'
import { Loader } from '../loader'
import { useAction, useTypedSelector } from '../../hooks'
import styles from './MoviesList.module.scss'
import { EmptyMovieList } from './EmptyMovieList'
import { IMovieItem } from '../../store/actions-types'

export const MoviesList: FC = () => {
    const [editMovie, setEditMovie] = useState<IMovieItem>(MOVIE_INFORMATION)
    const [deleteMovieId, setDeleteMovieId] = useState<number>(0)
    const {fetchMovies} = useAction()
    const {movies, isLoading, filterBy, sortBy} = useTypedSelector(state => state.movies)
    const {
        editMovieModalState,
        deleteMovieModalState,
        showEditMovieModal,
        showDeleteMovieModal
    } = useMovieModalContext()

    const {updateMovieDetails} = useMovieDetailsContext()

    useEffect(() => {
        fetchMovies(filterBy, sortBy)
    // eslint-disable-next-line
    }, [])

    const getEditMovie = (movie: IMovieItem) => {
        setEditMovie(movie)
        showEditMovieModal()
    }

    const getEditMovieId = (id: number | undefined) => {
        if (id) {
            setDeleteMovieId(id)
            showDeleteMovieModal()
        }
    }

    return (
        <>
            <div className={styles.moviesCounter}>{
                <p>
                    <b>{movies.length}</b> movies found
                </p>
            }</div>
            {
                movies.length ? (
                    <div className={classnames('row', styles.moviesList)}>{
                        movies.map((movieItem) => (
                            <MovieCard
                                key={movieItem.id}
                                movieItem={movieItem}
                                editMovie={getEditMovie}
                                deleteMovie={getEditMovieId}
                                getMovieDetails={updateMovieDetails}
                            />
                        ))
                    }</div>
                ) : (
                    !isLoading && <EmptyMovieList/>
                )
            }
            {
                isLoading && (
                    <Loader />
                )
            }
            {
                editMovieModalState && <MovieModalForm modalName={'Edit movie'} formValues={editMovie} />
            }
            {
                deleteMovieModalState && <DeleteMovieModal movieId={deleteMovieId} />
            }
        </>
    )
}
