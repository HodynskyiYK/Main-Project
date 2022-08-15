import { Header } from '../shared/header'
import { Footer } from '../shared/footer'
import { ErrorBoundary } from '../shared/error-boundaries'
import { MovieModalContextProvider } from '../context/movie-modal-context'
import { MovieDetails } from '../shared/movie-details'
import { MovieDetailsContextProvider } from '../context/movie-details-context'
import classnames from 'classnames'
import { FILTERS_VALUES, MoviesFilters } from '../shared/movies-filters'
import { MovieSorting } from '../shared/movie-sorting'
import { MoviesList } from '../shared/movies-list'
import styles from '../shared/main-content/MainContent.module.scss'

export default function Home() {

    return (
        <ErrorBoundary errorText={'Oops! Something went wrong. Please try again later.'}>
            <MovieModalContextProvider>
                <MovieDetailsContextProvider>
                    <Header/>
                    <MovieDetails/>
                    <main>
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
                                <MoviesList/>
                            </div>
                        </section>
                    </main>
                    <Footer/>
                </MovieDetailsContextProvider>
            </MovieModalContextProvider>
        </ErrorBoundary>
    )
}
