import { IMovieItem } from '../../../../store/actions-types'

export interface IMovieCard {
    movieItem: IMovieItem
    editMovie: () => void,
    deleteMovie: () => void,
    getMovieDetails: (movie: IMovieItem) => void
}