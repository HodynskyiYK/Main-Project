import React, { FC, useEffect, useRef, useState } from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import queryString from 'query-string'
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
import { useAction, useQuery, useTypedSelector } from '../../hooks'
import { MOVIE_SORTING_TYPES } from '../movie-sorting'
import styles from './SearchMoviesList.module.scss'
import { FILTERS_VALUES } from '../movies-filters'

export const SearchMoviesList: FC = () => {
    const [movies, setMovies] = useState([])
    const [editMovie, setEditMovie] = useState<IMovieItem>(MOVIE_INFORMATION)
    const [deleteMovieId, setDeleteMovieId] = useState<number>(0)
    const {filterBy, sortBy} = useTypedSelector(state => state.movies)
    const {setFilterBy, setSortingBy} = useAction()
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

    useEffect(() => {
        if (searchMovieID && movies.length) {
            const movieItem = movies.find((item: IMovieItem) => item.id === +searchMovieID)
            movieItem && updateMovieDetails(movieItem)
        }
        // eslint-disable-next-line
    }, [searchMovieID, movies])

    useEffect(() => {
        let movieSortBy
        if (searchSortBy) {
            movieSortBy = MOVIE_SORTING_TYPES.find((item) => item.name.toLowerCase() === searchSortBy.toLowerCase())
        }
        if (movieTitle) {
            searchMovie(movieTitle, movieSearchBy.TITLE, movieSortBy?.value)
                .then(movies => {
                    if (searchGenre) {
                        const filteredMoviesByGenres = movies.data.filter((item: IMovieItem) => {
                            if (typeof item.genres === 'string') {
                                return item.genres.toLowerCase().indexOf(searchGenre.toLowerCase())
                            } else {
                                return item.genres.map((item: string) => item.toLowerCase()).includes(searchGenre.toLowerCase())
                            }
                        })
                        return setMovies(filteredMoviesByGenres)
                    } else {
                        let sorterMovies
                        if (sortBy === 'vote_average') {
                            sorterMovies = movies.data.sort((moviePrev: any, movieNext: any) => movieNext.vote_average - moviePrev.vote_average)
                            return setMovies(sorterMovies)
                        } else {
                            sorterMovies = movies.data.sort((moviePrev: any, movieNext: any) => new Date(movieNext.release_date).getTime() - new Date(moviePrev.release_date).getTime())
                            return setMovies(sorterMovies)
                        }
                    }
                })
        } else if (searchGenre) {
            searchMovie(searchGenre, movieSearchBy.GENRE, movieSortBy?.value)
                .then(movies => setMovies(movies.data))
        } else {
            searchMovie()
                .then(movies => {
                    let sorterMovies
                    if (searchSortBy?.toString().toLowerCase() === 'rating' || sortBy === 'vote_average') {
                        sorterMovies = movies.data.sort((moviePrev: any, movieNext: any) => movieNext.vote_average - moviePrev.vote_average)
                        return setMovies(sorterMovies)
                    } else {
                        sorterMovies = movies.data.sort((moviePrev: any, movieNext: any) => new Date(movieNext.release_date).getTime() - new Date(moviePrev.release_date).getTime())
                        return setMovies(sorterMovies)
                    }
                })
        }
    }, [movieTitle, searchGenre, searchSortBy, sortBy, filterBy])

    useEffect(() => {
        if (filterBy !== prevFilterBy.current) {
            const parsedParams = queryString.parse(location.search)
            parsedParams.genre = filterBy.toLowerCase()
            const requestParams = queryString.stringify(parsedParams)
            const redirectUrl = `${location.pathname}?${requestParams}`
            history.push(redirectUrl)
            prevFilterBy.current = filterBy
        }
        if (sortBy !== prevSortBy.current) {
            const newSearchSortBy = MOVIE_SORTING_TYPES.find((item) => item.value === sortBy)?.name.toLocaleLowerCase()
            const parsedParams = queryString.parse(location.search)
            if (newSearchSortBy) {
                parsedParams.sortBy = newSearchSortBy
            }
            const requestParams = queryString.stringify(parsedParams)
            const redirectUrl = `${location.pathname}?${requestParams}`
            history.push(redirectUrl)
            prevSortBy.current = sortBy
        }
        // eslint-disable-next-line
    }, [filterBy, sortBy, searchGenre])

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
