import { IMoviesActions, IMoviesState, MovieActionsTypes } from '../actions-types'

const initialState: IMoviesState = {
    movies: [],
    isLoading: false,
    error: null,
    sortBy: 'release_date',
    filterBy: ''
}

export const movieReducer = (state = initialState, action: IMoviesActions) => {
    switch (action.type) {
        case MovieActionsTypes.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload,
                error: null
            }
        case MovieActionsTypes.SET_MOVIES:
            return {
                ...state,
                movies: action.payload,
                isLoading: false
            }
        case MovieActionsTypes.SET_FILTER:
            return {
                ...state,
                filterBy: action.payload
            }
        case MovieActionsTypes.SET_SORTING:
            return {
                ...state,
                sortBy: action.payload
            }
        case MovieActionsTypes.SET_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}