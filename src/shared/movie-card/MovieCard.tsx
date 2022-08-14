import React, { FC, useState, MouseEvent, useRef } from 'react'
import classnames from 'classnames'
import Highlighter from 'react-highlight-words'
import {IMovieCard} from './movieCardTypes'
import { CLOSE_ICON_12_13, THREE_VERTICAL_DOTS_44_44 } from '../../assets/svg'
import { concatMovieGenres, getFullYear, getMovieImage } from '../../utils'
import styles from './MoviesCard.module.scss'
import { useRouter } from 'next/router'


export const MovieCard: FC<IMovieCard> = ({movieItem, editMovie, deleteMovie, searchGenre}) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const router = useRouter()
    const movieGenres = useRef(concatMovieGenres(movieItem.genres))
    const movieImage = movieItem.poster_path

    const movieLinkHandler = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()

        router.push(`/movie/${movieItem.id}`)
    }

    return (
        <div className={classnames('col', 'col-4')}>
            <div className={styles.movieCard}>
                <div className={styles.cardHeader}>
                    <span
                        title={movieItem.title}
                        className={styles.movieLink}
                        onClick={movieLinkHandler}
                    >
                        <img
                            className={styles.movieImage}
                            src={movieImage}
                            alt={movieItem.title}
                            onError={({ currentTarget }) => {
                                const defaultImage = getMovieImage('placeholder_320x480.png')
                                currentTarget.onerror = null // prevents looping
                                currentTarget.src=defaultImage
                            }}
                        />
                    </span>
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
                                            onClick={() => editMovie && editMovie(movieItem)}
                                        >Edit</button>
                                    </li>
                                    <li>
                                        <button
                                            className={styles.deleteMovie}
                                            onClick={() => deleteMovie && deleteMovie(movieItem.id)}
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
                    <h4 className={styles.movieTitle}>{movieItem.title}</h4>
                    <p className={styles.release}>{getFullYear(movieItem.release_date)}</p>
                    <p className={styles.genre}>
                        <Highlighter
                            highlightClassName="YourHighlightClass"
                            searchWords={searchGenre ? [searchGenre] : []}
                            autoEscape={true}
                            textToHighlight={movieGenres.current}
                        />
                    </p>
                </div>
            </div>
        </div>
    )
}
