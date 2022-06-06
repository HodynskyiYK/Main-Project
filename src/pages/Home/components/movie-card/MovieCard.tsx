import React, { FC, useState } from 'react'
import classnames from 'classnames'
import {IMovieCard} from './movieCardTypes'
import styles from './MoviesCard.module.scss'

export const MovieCard: FC<IMovieCard> = ({movieItem, editMovie, deleteMovie}) => {
    const [editMode, setEditMode] = useState<boolean>(false)

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
                            src={require(`../../../../assets/images/movie-images/${movieItem.image}.png`)}
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
                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.09677 1.59464L10.9029 11.6236" stroke="white" strokeLinecap="round"/>
                                        <path d="M10.9032 1.59464L1.0971 11.6236" stroke="white" strokeLinecap="round"/>
                                    </svg>
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
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_0_213)">
                                        <circle cx="22" cy="22" r="18" fill="#2A202D"/>
                                    </g>
                                    <circle cx="22" cy="15" r="2" fill="white"/>
                                    <circle cx="22" cy="22.5" r="2" fill="white"/>
                                    <circle cx="22" cy="30" r="2" fill="white"/>
                                    <defs>
                                        <filter id="filter0_d_0_213" x="0" y="0" width="44" height="44"
                                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                           result="hardAlpha"/>
                                            <feOffset/>
                                            <feGaussianBlur stdDeviation="2"/>
                                            <feColorMatrix type="matrix"
                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.196596 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_213"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_213"
                                                     result="shape"/>
                                        </filter>
                                    </defs>
                                </svg>
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
