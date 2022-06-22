import React, { FC, useEffect } from 'react'
import classnames from 'classnames'
import {MovieCard} from '../movie-card'
import { useMovieModalContext } from '../../../../context/movie-modal-context'
import { MovieModalForm } from '../movie-modal-form'
import { DeleteMovieModal } from '../delete-movie-modal'
import { MOVIE_INFORMATION } from './moviesListConstans'
import { useMovieDetailsContext } from '../../../../context/movie-details-context'
import { Loader } from '../../../../shared/loader'
import { useAction, useTypedSelector } from '../../../../hooks'
import styles from './MoviesList.module.scss'
import { EmptyMovieList } from './EmptyMovieList'
// import { Button } from '../../../../components/button'

export const MoviesList: FC = () => {
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

    // console.log(movies)
    return (
        <>
            <div className={styles.moviesCounter}>
                <p>
                    <b>{movies.length}</b> movies found
                </p>
            </div>
            {
                movies.length ? (
                    <div className={classnames('row', styles.moviesList)}>{
                        movies.map((movieItem) => (
                            <MovieCard
                                key={movieItem.id}
                                movieItem={movieItem}
                                editMovie={showEditMovieModal}
                                deleteMovie={showDeleteMovieModal}
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
            {/*<div className={styles.loadMore}>
                <Button
                    buttonClassName={'addBtn'}
                    buttonText={isLoading ? 'Loading...' : 'Load more'}
                    buttonDisabled={isLoading}
                    buttonAction={() => fetchMovies()}
                />
            </div>*/}
            {

            }
            {
                editMovieModalState && <MovieModalForm modalName={'Edit movie'} formValues={MOVIE_INFORMATION} />
            }
            {
                deleteMovieModalState && <DeleteMovieModal />
            }
        </>
    )
}
