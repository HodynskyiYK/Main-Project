import React from 'react'
import {MemoryRouter} from 'react-router-dom'
import { MovieModalContextProvider } from '../src/context/movie-modal-context'
import { Provider } from 'react-redux'
import { store } from '../src/store'
import { MovieDetailsContextProvider } from '../src/context/movie-details-context'

// @ts-ignore
export const ProvidersMock = ({ children }) => {
    return (
        <Provider store={store}>
            <MovieModalContextProvider>
                <MovieDetailsContextProvider>
                    <MemoryRouter>{children}</MemoryRouter>
                </MovieDetailsContextProvider>
            </MovieModalContextProvider>
        </Provider>
    )
}