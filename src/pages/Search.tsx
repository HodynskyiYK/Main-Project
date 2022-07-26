import React, { FC } from 'react'
import classnames from 'classnames'
import { ErrorBoundary } from '../shared/error-boundaries'
import { Header } from '../shared/header'
import { Footer } from '../shared/footer'
import { MovieModalContextProvider } from '../context/movie-modal-context'
import { MovieDetailsContextProvider } from '../context/movie-details-context'
import { MovieDetails } from '../shared/movie-details'
import styles from '../shared/main-content/MainContent.module.scss'
import { SearchMoviesList } from '../shared/search-movies-list'
import { FILTERS_VALUES, MoviesFilters } from '../shared/movies-filters'
import { MovieSorting } from '../shared/movie-sorting'

export const Search: FC = () => {

    return (
        <ErrorBoundary errorText={'Oops! Something went wrong. Please try again later.'}>
            <MovieModalContextProvider>
                <MovieDetailsContextProvider>
                    <Header/>
                    <MovieDetails/>
                    <main data-testid="search-page">
                        <section>
                            <div className={classnames('container', styles.mainContent)}>
                                <div className={styles.topContent}>
                                    <div className={classnames('row', 'align-items-center', 'justify-content-between')}>
                                        <div className={classnames('col')}>
                                            <MoviesFilters filters={FILTERS_VALUES}/>
                                        </div>
                                        <div className={classnames('col')}>
                                            <MovieSorting/>
                                        </div>
                                    </div>
                                </div>
                                <SearchMoviesList/>
                            </div>
                        </section>
                    </main>
                    <Footer/>
                </MovieDetailsContextProvider>
            </MovieModalContextProvider>
        </ErrorBoundary>
    )
}
