import React, { FC, useEffect, useRef, useState } from 'react'
import queryString from 'query-string'
import {useHistory, useLocation} from 'react-router-dom'
import classnames from 'classnames'
import {MovieCard} from '../movie-card'
import { useMovieModalContext } from '../../context/movie-modal-context'
import { MovieModalForm } from '../movie-modal-form'
import { DeleteMovieModal } from '../delete-movie-modal'
import { useMovieDetailsContext } from '../../context/movie-details-context'
import { IMovieItem } from '../../store/actions-types'
import { EmptyMovieList, MOVIE_INFORMATION } from '../movies-list'
import { searchMovie } from '../../utils'
import { ISearchMoviesList, movieSearchBy } from './searchMoviesListTypes'
import { useAction, useTypedSelector } from '../../hooks'
import { MOVIE_SORTING_TYPES } from '../movie-sorting'
import styles from './SearchMoviesList.module.scss'
import { FILTERS_VALUES } from '../movies-filters'

export const SearchMoviesList: FC<ISearchMoviesList> = ({defaultMovies}) => {
    const [movies, setMovies] = useState([])
    const [editMovie, setEditMovie] = useState<IMovieItem>(MOVIE_INFORMATION)
    const [deleteMovieId, setDeleteMovieId] = useState<number>(0)
    const {filterBy, sortBy} = useTypedSelector(state => state.movies)
    const {setFilterBy, setSortingBy} = useAction()
    const prevFilterBy = useRef(filterBy)
    const prevSortBy = useRef(sortBy)
    const history = useHistory()
    const {
        editMovieModalState,
        deleteMovieModalState,
        showEditMovieModal,
        showDeleteMovieModal
    } = useMovieModalContext()
    const {updateMovieDetails} = useMovieDetailsContext()

    useEffect(() => {
        if (defaultMovies) {
            // @ts-ignore
            setMovies(defaultMovies)
        }
    }, [defaultMovies])

    useEffect(() => {
        const parsedParams = queryString.parse(location.search)
        if (parsedParams.sortBy) {
            const newSortByState = MOVIE_SORTING_TYPES.find((item) => item.name.toLowerCase() === parsedParams.sortBy?.toString().toLowerCase())?.value
            newSortByState && setSortingBy(newSortByState)
        }
        if (parsedParams.genre) {
            const newFilterBy = FILTERS_VALUES.find((item) => item.name.toLowerCase() === parsedParams.genre?.toString().toLowerCase())?.value
            newFilterBy && setFilterBy(newFilterBy)
        }
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

    if (!movies.length) {
        return (
            <EmptyMovieList />
        )
    }

    return (
        <>
            <div className={styles.moviesCounter}>{
                <p>
                    <b>{movies.length}</b> movies found
                </p>
            }</div>
            <div className={classnames('row', styles.moviesList)}>{
                movies.map((movieItem: IMovieItem) => (
                    <MovieCard
                        key={movieItem.id}
                        movieItem={movieItem}
                        editMovie={getEditMovie}
                        deleteMovie={getEditMovieId}
                        getMovieDetails={updateMovieDetails}
                        searchGenre={''}
                        isSearchPage={true}
                    />
                ))
            }</div>
            {
                editMovieModalState && <MovieModalForm modalName={'Edit movie'} formValues={editMovie} />
            }
            {
                deleteMovieModalState && <DeleteMovieModal movieId={deleteMovieId} />
            }
        </>
    )
}
