export const moviesApis = {
    GetMovies: (movieGenre?: string, sortBy = 'release_date') => {
        const filterBy = `&filter=${movieGenre}`
        const sortType = `&sortBy=${sortBy}&sortOrder=desc`

        return `${process.env.REACT_APP_API}/movies?limit=9&offset=0${filterBy}${sortType}`
    },
}