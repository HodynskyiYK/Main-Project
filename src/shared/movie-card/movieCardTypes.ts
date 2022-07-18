import { IMovieItem } from '../../store/actions-types'

export interface IMovieCard {
    movieItem: IMovieItem
    editMovie: (movie: IMovieItem) => void,
    deleteMovie: (id: number | undefined) => void,
    getMovieDetails: (movie: IMovieItem) => void,
    searchGenre?: string | null,
    isSearchPage?: boolean
}