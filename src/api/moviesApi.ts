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
}