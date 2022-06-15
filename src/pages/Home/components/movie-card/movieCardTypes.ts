export interface IMovieItem {
    id: number,
    title: string,
    link: string,
    image: string,
    release: number,
    genre: string,
    rating: number,
    duration: string,
    description: string
}

export interface IMovieCard {
    movieItem: IMovieItem
    editMovie: () => void,
    deleteMovie: () => void,
    getMovieDetails: (movie: IMovieItem) => void
}