import React, { createContext, FC, useContext, useState } from 'react'
import { IMovieDetailsContext } from './movieDetailsContextTypes'
import { IMovieItem } from '../../pages/Home/components/movie-card'

const MovieDetailsContext = createContext({
    movieInfo: {} as IMovieItem,
    getMovieDetails: (movie: IMovieItem) => console.log(movie),
    movieDetailsState: false,
    hideMovieDetails: () => console.log('false')
})

export const useMovieDetailsContext = () => useContext(MovieDetailsContext)

export const MovieDetailsContextProvider: FC<IMovieDetailsContext> = ({children}) => {
    const [movieDetailsState, setMovieDetailsState] = useState<boolean>(false)
    const [movieInfo, setMovieInfo] = useState<IMovieItem>({} as IMovieItem)

    const getMovieDetails = (movie: IMovieItem) => {
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
            getMovieDetails,
            hideMovieDetails
        }}>
            {children}
        </MovieDetailsContext.Provider>
    )
}
