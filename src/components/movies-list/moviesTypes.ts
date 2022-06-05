export interface IMovieItem {
    title: string,
    link: string,
    image: string,
    release: string,
    genre: string,
    id: number
}

export interface IMovieCard {
    movieItem: IMovieItem
}

export interface IMoviesList {
    moviesList: IMovieItem[]
}