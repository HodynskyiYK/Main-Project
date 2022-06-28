import { combineReducers } from 'redux'
import { movieReducer } from './movieReducer'

export const rootReducer = combineReducers({
    movies: movieReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>