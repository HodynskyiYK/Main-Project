import { IMovieItem } from '../../store/actions-types'

export interface ISearchMoviesList {
    defaultMovies: IMovieItem[]
}

export enum movieSearchBy {
    TITLE = 'title',
    GENRE = 'genres'
}