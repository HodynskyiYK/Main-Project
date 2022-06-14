import { ReactNode } from 'react'
import { IMovieItem } from '../../pages/Home/components/movie-card'

export interface IMovieDetailsContext {
    children: ReactNode
}

export interface IMovieDetailsContextType {
    movieInfo?: IMovieItem,
    updateMovieDetails: (movie: IMovieItem) => void | never,
    movieDetailsState: boolean,
    hideMovieDetails: () => void | never
}