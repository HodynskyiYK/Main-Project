export interface IMovieModalForm {
    modalName: string,
    formValues?: {
        title: string,
        releaseDate: string,
        movieUrl: string,
        rating: number,
        genre: string,
        runtime: string | number,
        overview: string
    }
}