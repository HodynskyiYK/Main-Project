import React, {FC} from 'react'
import {ErrorBoundary, Footer, Header, MainContent} from './components'

export const App: FC = () => {

    return (
        <>
            <ErrorBoundary errorText={'Oops! Something went wrong. Please try again later.'}>
                <Header/>
                <MainContent/>
                <Footer/>
            </ErrorBoundary>
        </>
    )
}
