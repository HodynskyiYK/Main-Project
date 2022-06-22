export const getMovieImage = (imageName: string): string => require(`/src/assets/images/movie-images/${imageName}`)

export const getFullYear = (date: string): number => new Date(date).getFullYear()

export const concatMovieGenres = (genres: string[]): string => genres.join(', ')

export const configureRuntime = (runtime: number): string => {
    const hours = Math.floor(runtime / 60)
    const minutes = runtime % 60
    return `${hours}h ${minutes}min`
}