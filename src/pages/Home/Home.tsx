import React, { FC } from 'react'
import { Header } from '../../shared/header'
import { MainContent } from './components/main-content'
import { Footer } from '../../shared/footer'
import { ErrorBoundary } from '../../shared/error-boundaries'
import { MovieModalContextProvider } from '../../context/movie-modal-context'

export const Home: FC = () => {

    return (
        <ErrorBoundary errorText={'Oops! Something went wrong. Please try again later.'}>
            <MovieModalContextProvider>
                <Header/>
                <MainContent/>
                <Footer/>
            </MovieModalContextProvider>
        </ErrorBoundary>
    )
}
