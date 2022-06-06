import React, { createContext, FC, useContext, useState } from 'react'
import { IModalContext } from './movieModalContextTypes'

const MovieModalContext = createContext({
    addMovieModalState: false,
    editMovieModalState: false,
    deleteMovieModalState: false,
    showAddMovieModal: () => console.log('true'),
    hideAddMovieModal: () => console.log('false'),
    showEditMovieModal: () => console.log('true'),
    hideEditMovieModal: () => console.log('false'),
    showDeleteMovieModal: () => console.log('true'),
    hideDeleteMovieModal: () => console.log('false')
})

export const useMovieModalContext = () => useContext(MovieModalContext)

export const MovieModalContextProvider: FC<IModalContext> = ({children}) => {
    const [addMovieModalState, setAddMovieModalState] = useState<boolean>(false)
    const [editMovieModalState, setEditMovieModalState] = useState<boolean>(false)
    const [deleteMovieModalState, setDeleteMovieModalState] = useState<boolean>(false)

    const showAddMovieModal = () => {
        setAddMovieModalState(true)
    }

    const hideAddMovieModal = () => {
        setAddMovieModalState(false)
    }

    const showEditMovieModal = () => {
        setEditMovieModalState(true)
    }

    const hideEditMovieModal = () => {
        setEditMovieModalState(false)
    }

    const showDeleteMovieModal = () => {
        setDeleteMovieModalState(true)
    }

    const hideDeleteMovieModal = () => {
        setDeleteMovieModalState(false)
    }

    return (
        <MovieModalContext.Provider value={{
            addMovieModalState,
            editMovieModalState,
            deleteMovieModalState,
            showAddMovieModal,
            hideAddMovieModal,
            showEditMovieModal,
            hideEditMovieModal,
            showDeleteMovieModal,
            hideDeleteMovieModal
        }}>
            {children}
        </MovieModalContext.Provider>
    )
}
