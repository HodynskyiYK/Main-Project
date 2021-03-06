import React, {FC} from 'react'
import classnames from 'classnames'
import {AddMovie} from '../add-movie'
import {FindYourMovie} from '../find-your-movie'
import { Logo } from '../../components/logo'
import { useMovieDetailsContext } from '../../context/movie-details-context'
import styles from './Header.module.scss'

export const Header: FC = () => {
    const {movieDetailsState} = useMovieDetailsContext()

    if (movieDetailsState) {
        return null
    }

    return (
        <header className={classnames('container', styles.headerContainer, styles.headerContent)}>
            <div className={classnames('row', 'align-items-start', 'justify-content-between')}>
                <div className={classnames('col')}>
                    <Logo/>
                </div>
                <div className={classnames('col')}>
                    <AddMovie/>
                </div>
                <div className={classnames('col', 'col-12')}>
                    <FindYourMovie />
                </div>
            </div>
        </header>
    )
}
