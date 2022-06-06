import React, { FC } from 'react'
import { IModal } from './modalTypes'
import styles from './Modal.module.scss'
import { useMovieModalContext } from '../../context/movie-modal-context'

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
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.47099 1.15426L21.529 21.2122" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M21.529 1.15426L1.47103 21.2122" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
                {
                    children
                }
            </div>
        </div>
    )
}
