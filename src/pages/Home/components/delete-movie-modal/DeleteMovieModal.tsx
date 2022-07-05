import React, { FC } from 'react'
import classnames from 'classnames'
import { Modal } from '../../../../components/modal'
import { Button } from '../../../../components/button'
import { useMovieModalContext } from '../../../../context/movie-modal-context'
import styles from './DeleteMovieModal.module.scss'
import { useAction, useTypedSelector } from '../../../../hooks'

interface IDeleteMovieModal {
    movieId?: number | undefined
}

export const DeleteMovieModal: FC<IDeleteMovieModal> = ({movieId}) => {
    const {deleteMovie, fetchMovies} = useAction()
    const {filterBy, sortBy} = useTypedSelector(state => state.movies)
    const {hideDeleteMovieModal} = useMovieModalContext()

    const confirmButtonHandler = async (id: number | undefined) => {
        if (id) {
            const responseStatus = await deleteMovie(id)
            hideDeleteMovieModal()
            if (+responseStatus <= 299) {
                fetchMovies(filterBy, sortBy)
            }
        }
    }

    return (
        <Modal>
            <div className={styles.deleteMovieCard}>
                <p className={classnames('h1', styles.confirmTitle)}>Delete movie</p>
                <p className={styles.confirmText}>Are you sure you want to delete this movie?</p>
                <p className={styles.confirmButton}>
                    <Button
                        buttonClassName={'confirmBtn'}
                        buttonText={'Confirm'}
                        buttonAction={() => confirmButtonHandler(movieId)}
                    />
                </p>
            </div>
        </Modal>
    )
}
