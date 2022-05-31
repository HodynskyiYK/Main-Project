import React, {FC} from 'react'
import {AddMovieButton} from '../add-movie'
import {FindYourMovie} from '../find-your-movie'

export const Header: FC = () => {

    return (
        <header className="header container">
            <div className="row align-items-start justify-content-between">
                <div className="col">
                    <span className="logo">
                        <b>netflix</b>
                        roulette
                    </span>
                </div>
                <div className="col">
                    <AddMovieButton/>
                </div>
                <div className="col col-12">
                    <FindYourMovie/>
                </div>
            </div>
        </header>
    )
}
