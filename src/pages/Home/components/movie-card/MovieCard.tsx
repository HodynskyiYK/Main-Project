import React, { FC, useState } from 'react'
import classnames from 'classnames'
import {IMovieCard} from './movieCardTypes'
import styles from './MoviesCard.module.scss'
import { CLOSE_ICON_12_13, THREE_VERTICAL_DOTS_44_44 } from '../../../../assets/svg'

const getMovieImage = (imageName: string) => require(`../../../../assets/images/movie-images/${imageName}.png`)

export const MovieCard: FC<IMovieCard> = ({movieItem, editMovie, deleteMovie}) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const movieImage = getMovieImage(movieItem.image)

    return (
        <div className={classnames('col', 'col-4')}>
            <div className={styles.movieCard}>
                <div className={styles.cardHeader}>
                    <a
                        href={movieItem.link}
                        title={movieItem.title}
                        className={styles.movieLink}
                    >
                        <img
                            className={styles.movieImage}
                            src={movieImage}
                            alt={movieItem.title}
                        />
                    </a>
                    {
                        editMode ? (
                            <div className={styles.editList}>
                                <button
                                    className={styles.closeEditMode}
                                    onClick={() => setEditMode(false)}
                                >
                                    {CLOSE_ICON_12_13}
                                </button>
                                <ul>
                                    <li>
                                        <button
                                            className={styles.editMovie}
                                            onClick={editMovie}
                                        >Edit</button>
                                    </li>
                                    <li>
                                        <button
                                            className={styles.deleteMovie}
                                            onClick={deleteMovie}
                                        >Delete</button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <button
                                className={styles.editBtn}
                                onClick={() => setEditMode(true)}
                            >
                                {THREE_VERTICAL_DOTS_44_44}
                            </button>
                        )
                    }
                </div>
                <div className={styles.cardBody}>
                    <h4 className={styles.movieTitle}>
                        <a href={movieItem.link}>{movieItem.title}</a>
                    </h4>
                    <p className={styles.release}>{movieItem.release}</p>
                    <p className={styles.genre}>{movieItem.genre}</p>
                </div>
            </div>
        </div>
    )
}
