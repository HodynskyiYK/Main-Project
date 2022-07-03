import { IMovieItem } from '../../../../store/actions-types'

export const MOVIE_GENRES = ['Action', 'Adventure', 'Crime', 'Drama', 'Mystery', 'Documentary', 'Comedy', 'Romance', 'Horror', 'Thriller', 'Fantasy']

export const FORM_VALIDATE = (values: IMovieItem) => {
    const errors = {} as any;
    if (!values.title) {
        errors.title = 'Required';
    }

    if (!values.release_date) {
        errors.release_date = 'Required';
    }

    if (!values.poster_path) {
        errors.poster_path = 'Required';
    }

    if (!values.vote_average) {
        errors.vote_average = 'Required';
    }

    if (!values.runtime) {
        errors.runtime = 'Required';
    }

    if (!values.overview) {
        errors.overview = 'Required';
    }

    return errors;
}