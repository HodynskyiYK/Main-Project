import React, {FC, FormEvent, useState} from 'react'
import classnames from 'classnames'
import { Button, ButtonTypes } from '../../../../components/button'
import { Input } from '../../../../components/input'
import styles from './FindYourMovie.module.scss'

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
        <div className={styles.findYourMovie}>
            <p className={classnames('h1', styles.h1)}>
                Find your movie
            </p>
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
