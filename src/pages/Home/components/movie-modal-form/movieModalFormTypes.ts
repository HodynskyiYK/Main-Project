import { IMovieItem } from '../../../../store/actions-types'

export interface IMovieModalForm {
    modalName: string,
    formValues?: IMovieItem | undefined
}