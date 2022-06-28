import React, { FC } from 'react'
import classnames from 'classnames'
import { Logo } from '../../../../components/logo'
import { Button, ButtonTypes } from '../../../../components/button'
import { SEARCH_ICON_29_30 } from '../../../../assets/svg'
import { concatMovieGenres, configureRuntime, getFullYear, getMovieImage } from '../../../../utils'
import { useMovieDetailsContext } from '../../../../context/movie-details-context'
import styles from './MovieDetails.module.scss'

export const MovieDetails: FC = () => {
    const {
        movieInfo,
        movieDetailsState,
        hideMovieDetails
    } = useMovieDetailsContext()

    if (!movieDetailsState || !movieInfo) {
        return null
    }

    return (
        <div className={classnames('container', styles.detailsContent)}>
            <div className={classnames('row', 'align-items-start', 'justify-content-between')}>
                <div className="col">
                    <Logo/>
                </div>
                <div className="col">
                    <Button
                        buttonClassName={ButtonTypes.ICON_BTN}
                        buttonText={SEARCH_ICON_29_30}
                        buttonAction={hideMovieDetails}
                    />
                </div>
            </div>
            <div className={classnames('row', 'align-items-start', styles.movieDetails)}>
                <div className="col col-4">
                    <div className={styles.movieImage}>
                        <img
                            src={movieInfo.poster_path}
                            alt={movieInfo.title}
                            onError={({ currentTarget }) => {
                                const defaultImage = getMovieImage('placeholder_320x480.png')
                                currentTarget.onerror = null // prevents looping
                                currentTarget.src=defaultImage
                            }}
                        />
                    </div>
                </div>
                <div className="col col-8">
                    <div className="row nowrap align-items-center">
                        <p className={classnames(styles.movieTitle, 'h1', 'col')}>{movieInfo.title}</p>
                        <div className="col">
                            <p className={classnames(styles.movieRating, 'col')}>
                                <span>{movieInfo.vote_average}</span>
                            </p>
                        </div>
                    </div>
                    <p className={styles.movieGenre}>{concatMovieGenres(movieInfo.genres)}</p>
                    <div className="row">
                        <div className="col">
                            <p className={styles.movieRelease}>{getFullYear(movieInfo.release_date)}</p>
                        </div>
                        <div className="col">
                            <p className={styles.movieDuration}>{configureRuntime(movieInfo.runtime)}</p>
                        </div>
                        <div className={classnames('col', 'col-12')}>
                            <p className={styles.movieDescription}>{movieInfo.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
