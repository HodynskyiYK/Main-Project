import React, {FC} from 'react'
import {FILTERS_VALUES, MoviesFilters} from '../movies-filters'
import {MovieSorting} from '../movie-sorting'
import {MOVIES, MoviesList} from '../movies-list'

export const MainContent: FC = () => {

    return (
        <main>
            <section>
                <div className="main-content container">
                    <div className="top-content">
                        <div className="row align-items-center justify-content-between">
                            <div className="col">
                                <MoviesFilters filters={FILTERS_VALUES}/>
                            </div>
                            <div className="col">
                                <MovieSorting/>
                            </div>
                        </div>
                    </div>
                    <MoviesList moviesList={MOVIES}/>
                </div>
            </section>
        </main>
    )
}
