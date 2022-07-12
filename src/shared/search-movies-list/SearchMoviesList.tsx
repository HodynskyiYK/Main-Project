import React, { FC, useEffect, useRef, useState } from 'react'
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
import {movieSearchBy} from './searchMoviesListTypes'
import { useQuery, useTypedSelector } from '../../hooks'
import { MOVIE_SORTING_TYPES } from '../movie-sorting'
import styles from './SearchMoviesList.module.scss'

export const SearchMoviesList: FC = () => {
    const [movies, setMovies] = useState([])
    const [editMovie, setEditMovie] = useState<IMovieItem>(MOVIE_INFORMATION)
    const [deleteMovieId, setDeleteMovieId] = useState<number>(0)
    const {filterBy, sortBy} = useTypedSelector(state => state.movies)
    const prevFilterBy = useRef(filterBy)
    const prevSortBy = useRef(sortBy)
    const searchQuery = useQuery()
    const history = useHistory()
    const location = useLocation()
    const {
        editMovieModalState,
        deleteMovieModalState,
        showEditMovieModal,
        showDeleteMovieModal
    } = useMovieModalContext()
    const {updateMovieDetails} = useMovieDetailsContext()
    const movieTitle = searchQuery.get('search')
    const searchGenre = searchQuery.get('genre')
    const searchSortBy = searchQuery.get('sortBy')
    const searchMovieID = searchQuery.get('movie')

    useEffect(() => {
        if (searchMovieID && movies.length) {
            const movieItem = movies.find((item: IMovieItem) => item.id === +searchMovieID)
            movieItem && updateMovieDetails(movieItem)
        }
        // eslint-disable-next-line
    }, [searchMovieID, movies])

    useEffect(() => {
        let sortBy
        if (searchSortBy) {
            sortBy = MOVIE_SORTING_TYPES.find((item) => item.name.toLowerCase() === searchSortBy.toLowerCase())
        }
        if (movieTitle) {
            searchMovie(movieTitle, movieSearchBy.TITLE, sortBy?.value)
                .then(movies => setMovies(movies.data))
        } else if (searchGenre) {
            searchMovie(searchGenre, movieSearchBy.GENRE, sortBy?.value)
                .then(movies => setMovies(movies.data))
        } else {
            searchMovie()
                .then(movies => setMovies(movies.data))
        }
    }, [movieTitle, searchGenre, searchSortBy])

    useEffect(() => {
        if (filterBy !== prevFilterBy.current) {
            /*const parsedParams = queryString.parse(location.search)
            const requestParams = queryString.stringify(parsedParams)
            console.log(parsedParams)
            console.log(requestParams)*/
            const searchParameters = location.search.split('&')
                .filter((item: string) => !item.includes('genre'))
                .join('&')
            const redirectUrl = `${location.pathname}${searchParameters}&genre=${filterBy.toLowerCase()}`
            prevFilterBy.current = filterBy
            history.push(redirectUrl)
        }
        if (sortBy !== prevSortBy.current) {
            prevSortBy.current = sortBy
        }
        // eslint-disable-next-line
    }, [filterBy, sortBy])

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
                        searchGenre={searchGenre}
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
