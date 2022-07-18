import { IMovieItem } from '../store/actions-types'
import { moviesApis } from '../api'

export const getMovieImage = (imageName: string): string => require(`/src/assets/images/movie-images/${imageName}`)

export const getFullYear = (date: string): number => new Date(date).getFullYear()

export const concatMovieGenres = (genres: string[] | string): string => {
    if (typeof genres === 'string') {
        return genres
    }
    return genres.join(', ')
}

export const configureRuntime = (runtime: number | string): string => {
    const hours = Math.floor(+runtime / 60)
    const minutes = +runtime % 60
    return `${hours}h ${minutes}min`
}

export const splitMoviesGenres = (genres: string[] | string): string[] => {
    if (typeof genres === 'string') {
        return genres.split(',')
    }
    return genres

}

export const fillEmptyMovieFields = (movie: IMovieItem): IMovieItem => ({
    ...movie,
    title: movie.title ? movie.title : 'Movie Title',
    tagline: movie.tagline ? movie.tagline : 'Tags',
    vote_average: movie.vote_average ? movie.vote_average : 0,
    vote_count: movie.vote_count ? movie.vote_count : 0,
    release_date: movie.release_date ? movie.release_date : '2016-12-29',
    poster_path: movie.poster_path ? movie.poster_path : 'https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg',
    overview: movie.overview ? movie.overview : 'overview',
    budget: movie.budget ? movie.budget : 0,
    revenue: movie.revenue ? movie.revenue : 0,
    runtime: movie.runtime ? movie.runtime : 0,
    genres: movie.genres ? splitMoviesGenres(movie.genres) : ['Comedy', 'Drama', 'Romance']
})

export const searchMovie = async (searchValue?: string, searchBy?: string, sortBy?: string) => {
    const response = await fetch(moviesApis.searchMovieByTitle(searchValue, searchBy, sortBy))
    return await response.json()
}