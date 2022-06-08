import React, { FC } from 'react'
import { IModal } from './modalTypes'
import styles from './Modal.module.scss'
import { useMovieModalContext } from '../../context/movie-modal-context'
import { CLOSE_ICON_23_23 } from '../../assets/svg'

export const Modal: FC<IModal> = ({children}) => {
    const {
        hideAddMovieModal,
        hideEditMovieModal,
        hideDeleteMovieModal
    } = useMovieModalContext()

    const hideModal = () => {
        hideAddMovieModal()
        hideEditMovieModal()
        hideDeleteMovieModal()
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <button
                    className={styles.closeModal}
                    onClick={hideModal}
                >
                    {CLOSE_ICON_23_23}
                </button>
                {
                    children
                }
            </div>
        </div>
    )
}
