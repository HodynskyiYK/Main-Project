import React, { FC } from 'react'
import classnames from 'classnames'
import { Logo } from '../../../../components/logo'
import { Button, ButtonTypes } from '../../../../components/button'
import { SEARCH_ICON_29_30 } from '../../../../assets/svg'
import { getMovieImage } from '../../../../utils'
import { useMovieDetailsContext } from '../../../../context/movie-details-context'
import styles from './MovieDetails.module.scss'

export const MovieDetails: FC = () => {
    const {
        movieInfo,
        movieDetailsState,
        hideMovieDetails
    } = useMovieDetailsContext()

    if (!movieDetailsState || !movieInfo || !Object.keys(movieInfo).length) {
        return null
    }

    const movieImage = getMovieImage(movieInfo.image)

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
                            src={movieImage}
                            alt={movieInfo.title}
                        />
                    </div>
                </div>
                <div className="col col-8">
                    <div className="row align-items-center">
                        <div className="col">
                            <p className={classnames(styles.movieTitle, 'h1')}>{movieInfo.title}</p>
                        </div>
                        <div className="col">
                            <p className={styles.movieRating}>
                                <span>{movieInfo.rating}</span>
                            </p>
                        </div>
                    </div>
                    <p className={styles.movieGenre}>{movieInfo.genre}</p>
                    <div className="row">
                        <div className="col">
                            <p className={styles.movieRelease}>{movieInfo.release}</p>
                        </div>
                        <div className="col">
                            <p className={styles.movieDuration}>{movieInfo.duration}</p>
                        </div>
                        <div className={classnames('col', 'col-12')}>
                            <p className={styles.movieDescription}>{movieInfo.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
