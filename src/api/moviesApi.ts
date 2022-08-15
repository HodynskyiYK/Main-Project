import queryString from 'query-string'

export const moviesApis = {
    getMovies: (movieGenre: string, sortBy: string) => {
        const parsedParams = queryString.parse('limit=9&offset=0')
        if (movieGenre) {
            parsedParams.filter = movieGenre
        }
        if (sortBy) {
            parsedParams.sortBy = sortBy
            parsedParams.sortOrder = 'desc'
        }
        const requestParams = queryString.stringify(parsedParams)

        return `http://localhost:4000/movies?${requestParams}`
    },
    addMovie: () => {
        return `http://localhost:4000/movies`
    },
    updateMovie: () => {
        return `http://localhost:4000/movies`
    },
    deleteMovie: (id: number) => {
        return `http://localhost:4000/movies/${id}`
    },
    searchMovieByTitle: (searchValue?: string, searchBy?: string, sortBy?: string, filterBy?: string) => {
        const parsedParams = queryString.parse('limit=9&offset=0')
        parsedParams.search = searchValue ? searchValue : ''
        if (searchBy) {
            parsedParams.searchBy = searchBy
        }
        if (filterBy) {
            parsedParams.filter = filterBy
        }
        if (sortBy) {
            parsedParams.sortBy = sortBy
            parsedParams.sortOrder = 'desc'
        } else {
            parsedParams.sortBy = 'release_date'
            parsedParams.sortOrder = 'desc'
        }
        const requestParams = queryString.stringify(parsedParams)
        return `http://localhost:4000/movies?${requestParams}`
    },
    getOneMovie: (movieId: number) => {
        return `http://localhost:4000/movies/${movieId}`
    }
}