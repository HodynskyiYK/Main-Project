import { ReactNode } from 'react'
import { IMovieItem } from '../../store/actions-types'

export interface IMovieDetailsContext {
    children: ReactNode
}

export interface IMovieDetailsContextType {
    movieInfo?: IMovieItem,
    updateMovieDetails: (movie: IMovieItem) => void | never,
    movieDetailsState: boolean,
    hideMovieDetails: () => void | never
}