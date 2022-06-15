import React, { FC } from 'react'
import { Header } from '../../shared/header'
import { MainContent } from './components/main-content'
import { Footer } from '../../shared/footer'
import { ErrorBoundary } from '../../shared/error-boundaries'
import { MovieModalContextProvider } from '../../context/movie-modal-context'
import { MovieDetails } from './components/movie-details'
import { MovieDetailsContextProvider } from '../../context/movie-details-context'

export const Home: FC = () => {

    return (
        <ErrorBoundary errorText={'Oops! Something went wrong. Please try again later.'}>
            <MovieModalContextProvider>
                <MovieDetailsContextProvider>
                    <Header/>
                    <MovieDetails/>
                    <MainContent/>
                    <Footer/>
                </MovieDetailsContextProvider>
            </MovieModalContextProvider>
        </ErrorBoundary>
    )
}
