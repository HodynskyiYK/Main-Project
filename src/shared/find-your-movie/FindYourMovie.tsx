import React, { FC, FormEvent, useEffect, useState } from 'react'
import classnames from 'classnames'
import { Button, ButtonTypes } from '../../components/button'
import { Input } from '../../components/input'
import { useAction } from '../../hooks'
import styles from './FindYourMovie.module.scss'
import { useRouter } from 'next/router'

export const FindYourMovie: FC = () => {
    const [redirectTo, setRedirectTo] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')
    const {setFilterBy, setSortingBy} = useAction()
    const router = useRouter()

    const formHandler = (event: FormEvent) => {
        event.preventDefault()
        setSortingBy('release_date')
        setFilterBy('')
        router.push('/search')
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
