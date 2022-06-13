export interface IMovieModalForm {
    modalName: string,
    formValues?: {
        title: string,
        releaseDate: string,
        movieUrl: string,
        rating: number,
        genre: string,
        duration: string | number,
        overview: string
    }
}