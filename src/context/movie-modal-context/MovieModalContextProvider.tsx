import React, { createContext, FC, useContext, useState } from 'react'
import { IModalContext } from './movieModalContextTypes'

const MovieModalContext = createContext({
    addMovieModalState: false,
    editMovieModalState: false,
    deleteMovieModalState: false,
    showAddMovieModal: (): void | never => {
        throw new Error("Do not use context out of context provider")
    },
    hideAddMovieModal: (): void | never => {
        throw new Error("Do not use context out of context provider")
    },
    showEditMovieModal: (): void | never => {
        throw new Error("Do not use context out of context provider")
    },
    hideEditMovieModal: (): void | never => {
        throw new Error("Do not use context out of context provider")
    },
    showDeleteMovieModal: (): void | never => {
        throw new Error("Do not use context out of context provider")
    },
    hideDeleteMovieModal: (): void | never => {
        throw new Error("Do not use context out of context provider")
    }
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
