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

        return `${process.env.REACT_APP_API}/movies?${requestParams}`
    },
    addMovie: () => {
        return `${process.env.REACT_APP_API}/movies`
    },
    updateMovie: () => {
        return `${process.env.REACT_APP_API}/movies`
    },
    deleteMovie: (id: number) => {
        return `${process.env.REACT_APP_API}/movies/${id}`
    },
    searchMovieByTitle: (searchValue?: string, searchBy?: string, sortBy?: string) => {
        const parsedParams = queryString.parse('')
        parsedParams.search = searchValue ? searchValue : ''
        if (searchBy) {
            parsedParams.searchBy = searchBy
        }
        if (sortBy) {
            parsedParams.sortBy = sortBy
            parsedParams.sortOrder = 'desc'
        }
        const requestParams = queryString.stringify(parsedParams)
        return `${process.env.REACT_APP_API}/movies?${requestParams}`
    }
}