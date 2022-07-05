import { IMovieItem, IMoviesActions, MovieActionsTypes } from '../actions-types'
import { AppDispatch } from '../index'
import { moviesApis } from '../../api'

export const MoviesActionCreators = {
    setLoading: (loading: boolean): IMoviesActions => ({
        type: MovieActionsTypes.SET_LOADING,
        payload: loading
    }),
    setError: (errorMessage: string): IMoviesActions => ({
        type: MovieActionsTypes.SET_ERROR,
        payload: errorMessage
    }),
    setMovies: (movies: IMovieItem[]): IMoviesActions => ({
        type: MovieActionsTypes.SET_MOVIES,
        payload: movies
    }),
    setSortingBy: (sortingBy: string): IMoviesActions => ({
        type: MovieActionsTypes.SET_SORTING,
        payload: sortingBy
    }),
    setFilterBy: (filterBy: string): IMoviesActions => ({
        type: MovieActionsTypes.SET_FILTER,
        payload: filterBy
    }),
    fetchMovies: (movieGenre: string, sortBy: string) => {
        return async (dispatch: AppDispatch) => {
            dispatch(MoviesActionCreators.setLoading(true))
            dispatch(MoviesActionCreators.setFilterBy(movieGenre))
            dispatch(MoviesActionCreators.setSortingBy(sortBy))
                try {
                    const response = await fetch(moviesApis.getMovies(movieGenre, sortBy))
                    const movies = await response.json()
                    dispatch(MoviesActionCreators.setMovies(movies.data))
                } catch (err) {
                    console.log(err)
                    dispatch(MoviesActionCreators.setError('Some error!'))
                }
        }
    },
    addMovie: (newMovie: IMovieItem) => {
        return async (dispatch: AppDispatch) => {
            dispatch(MoviesActionCreators.setLoading(true))
            try {
                const response = await fetch(moviesApis.addMovie(), {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newMovie)
                })
                dispatch(MoviesActionCreators.setLoading(false))
                return response.status
            } catch (err) {
                console.log(err)
                dispatch(MoviesActionCreators.setError('Some error!'))
            }
        }
    },
    updateMovie: (newMovie: IMovieItem) => {
        return async (dispatch: AppDispatch) => {
            dispatch(MoviesActionCreators.setLoading(true))
            try {
                const response = await fetch(moviesApis.addMovie(), {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newMovie)
                })
                dispatch(MoviesActionCreators.setLoading(false))
                return response.status
            } catch (err) {
                console.log(err)
                dispatch(MoviesActionCreators.setError('Some error!'))
            }
        }
    },
    deleteMovie: (id: number) => {
        return async (dispatch: AppDispatch) => {
            dispatch(MoviesActionCreators.setLoading(true))
            try {
                const response = await fetch(moviesApis.deleteMovie(id), {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                dispatch(MoviesActionCreators.setLoading(false))
                return response.status
            } catch (err) {
                console.log(err)
                dispatch(MoviesActionCreators.setError('Some error!'))
            }
        }
    }
}