import React, { createContext, FC, useContext, useState } from 'react'
import { IMovieDetailsContext, IMovieDetailsContextType } from './movieDetailsContextTypes'
import { IMovieItem } from '../../store/actions-types'

const MovieDetailsContext = createContext<IMovieDetailsContextType>({
    movieInfo: {} as IMovieItem,
    updateMovieDetails: (movie: IMovieItem) => {
        console.log(movie)
        throw new Error("Do not use context out of context provider")
    },
    movieDetailsState: false,
    hideMovieDetails: () => {
        throw new Error("Do not use context out of context provider")
    }
})

export const useMovieDetailsContext = () => useContext(MovieDetailsContext)

export const MovieDetailsContextProvider: FC<IMovieDetailsContext> = ({children}) => {
    const [movieDetailsState, setMovieDetailsState] = useState<boolean>(false)
    const [movieInfo, setMovieInfo] = useState<IMovieItem>({} as IMovieItem)

    const updateMovieDetails = (movie: IMovieItem) => {
        setMovieInfo({...movie})
        if (!movieDetailsState) {
            setMovieDetailsState(true)
        }
    }

    const hideMovieDetails = () => {
        if (movieDetailsState) {
            setMovieDetailsState(false)
            setMovieInfo({} as IMovieItem)
        }
    }

    return (
        <MovieDetailsContext.Provider value={{
            movieInfo,
            movieDetailsState,
            updateMovieDetails,
            hideMovieDetails
        }}>
            {children}
        </MovieDetailsContext.Provider>
    )
}
