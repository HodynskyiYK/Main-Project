import React, { FC, FormEvent, useEffect, useState } from 'react'
import {Redirect, useLocation, useHistory} from 'react-router-dom'
import classnames from 'classnames'
import { Button, ButtonTypes } from '../../components/button'
import { Input } from '../../components/input'
import { useQuery } from '../../hooks'
import styles from './FindYourMovie.module.scss'

export const FindYourMovie: FC = () => {
    const [redirectTo, setRedirectTo] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')
    const searchQuery = useQuery()
    const history = useHistory()
    const {pathname} = useLocation()

    useEffect(() => {
        const movieTitle = searchQuery.get('search')

        if (movieTitle && pathname === '/search') {
            setValue(movieTitle)
        }
    // eslint-disable-next-line
    }, [])

    const formHandler = (event: FormEvent) => {
        event.preventDefault()
        if (pathname !== '/search') {
            setRedirectTo(true)
        } else {
            history.push(`/search?search=${value}`)
        }
    }

    if (redirectTo) {
        return (
            <Redirect to={`/search?search=${value}`} />
        )
    }

    return (
        <div className={styles.findYourMovie}>
            <p className={classnames('h1', styles.h1)}>Find your movie</p>
            <form
                className={styles.searchForm}
                onSubmit={formHandler}
            >
                <div className={styles.formGroup}>
                    <div className={styles.findInput}>
                        <Input
                            inputName={'find-movie'}
                            inputType={'text'}
                            inputPlaceholder={'What do you want to watch?'}
                            inputValue={value}
                            onChange={(event) => setValue(event.target.value)}
                        />
                    </div>
                    <Button
                        buttonClassName={ButtonTypes.SEARCH_BTN}
                        buttonText={'Search'}
                    />
                </div>
            </form>
        </div>
    )
}
