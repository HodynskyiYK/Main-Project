import React, { FC } from 'react'
import classnames from 'classnames'
import { Modal } from '../../../../components/modal'
import { Button } from '../../../../components/button'
import { useMovieModalContext } from '../../../../context/movie-modal-context'
import styles from './DeleteMovieModal.module.scss'

export const DeleteMovieModal: FC = () => {
    const {hideDeleteMovieModal} = useMovieModalContext()

    return (
        <Modal>
            <div className={styles.deleteMovieCard}>
                <p className={classnames('h1', styles.confirmTitle)}>Delete movie</p>
                <p className={styles.confirmText}>Are you sure you want to delete this movie?</p>
                <p className={styles.confirmButton}>
                    <Button
                        buttonClassName={'confirmBtn'}
                        buttonText={'Confirm'}
                        buttonAction={hideDeleteMovieModal}
                    />
                </p>
            </div>
        </Modal>
    )
}
