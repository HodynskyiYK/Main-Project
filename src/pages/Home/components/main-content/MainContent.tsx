import React, { FC } from 'react'
import classnames from 'classnames'
import {FILTERS_VALUES, MoviesFilters} from '../movies-filters'
import {MovieSorting} from '../movie-sorting'
import { MoviesList } from '../movies-list'
import styles from './MainContent.module.scss'

export const MainContent: FC = () => {

    return (
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
    )
}
