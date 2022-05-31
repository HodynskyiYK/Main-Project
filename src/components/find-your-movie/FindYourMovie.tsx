import React, {FC, FormEvent, useState} from 'react'

export const FindYourMovie: FC = () => {
    const [searchButtonClick, setSearchButtonClick] = useState<number>(0)

    const formHandler = (event: FormEvent) => {
        event.preventDefault()
        setSearchButtonClick((prev) => prev + 1)
    }

    if (searchButtonClick > 0) {
        throw new Error('error')
    }

    return (
        <div className="find-your-movie">
            <p className="h1">
                Find your movie
            </p>
            <form
                className="search-form"
                onSubmit={formHandler}
            >
                <div className="form-group">
                    <input
                        className="input find-input"
                        type="text"
                        name="find-movie"
                        placeholder="What do you want to watch?"
                    />
                    <button className="btn confirm-btn">Search</button>
                </div>
            </form>
        </div>
    )
}
