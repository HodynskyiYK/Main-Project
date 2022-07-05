export enum MovieActionsTypes {
    SET_MOVIES = 'SET_MOVIES',
    SET_LOADING = 'SET_LOADING',
    SET_ERROR = 'SET_ERROR',
    SET_SORTING = 'SET_SORTING',
    SET_FILTER = 'SET_FILTER'

}

export interface IMovieItem {
    title: string,
    tagline: string,
    vote_average: number | string,
    vote_count: number | string,
    release_date: string,
    poster_path: string,
    overview: string,
    budget: number | string,
    revenue: number | string,
    runtime: number | string,
    genres: string[] | string,
    id?: number
}

interface ISetMovies {
    type: MovieActionsTypes.SET_MOVIES,
    payload: IMovieItem[]
}

interface ISetLoading {
    type: MovieActionsTypes.SET_LOADING,
    payload: boolean
}

interface ISetError {
    type: MovieActionsTypes.SET_ERROR,
    payload: string
}

interface ISetSortingBy {
    type: MovieActionsTypes.SET_SORTING,
    payload: string
}

interface ISetFilterBy {
    type: MovieActionsTypes.SET_FILTER,
    payload: string
}

export type IMoviesActions = ISetMovies | ISetLoading | ISetError | ISetSortingBy | ISetFilterBy

export interface IMoviesState {
    movies: [] | IMovieItem[],
    isLoading: boolean,
    error: string | null,
    sortBy: string,
    filterBy: string
}