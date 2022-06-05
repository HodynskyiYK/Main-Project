import React, {FC, useState} from 'react'

export const AddMovieButton: FC = () => {
    const [clickCount, setClickCount] = useState<number>(0)

    const addMovie = (): void => {
        setClickCount(prev => prev + 1)
    }

    if (clickCount > 0) {
        throw new Error('error')
    }

    return (
        <button
            className="btn add-btn"
            onClick={addMovie}
        >
            + add movie
        </button>
    )
}
