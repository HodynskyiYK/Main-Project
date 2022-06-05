import React, {FC} from 'react'
import {IMovieCard} from './moviesTypes'

export const MovieCard: FC<IMovieCard> = ({movieItem}) => {

    return (
        <div className="col col-4">
            <div className="movie-card">
                <div className="card-header">
                    <a
                        href={movieItem.link}
                        title={movieItem.title}
                        className="movie-link"
                    >
                        <img
                            className="movie-image"
                            src={require(`../../assets/movie-images/${movieItem.image}.png`)}
                            alt={movieItem.title}
                        />
                    </a>
                    <button className="edit-btn">
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
                </div>
                <div className="card-body">
                    <h4 className="movie-title">
                        <a href={movieItem.link}>{movieItem.title}</a>
                    </h4>
                    <p className="release">{movieItem.release}</p>
                    <p className="genre">{movieItem.genre}</p>
                </div>
            </div>
        </div>
    )
}
