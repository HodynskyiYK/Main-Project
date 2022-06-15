import React, { FC, FormEvent } from 'react'
import classnames from 'classnames'
import { Input } from '../../../../components/input'
import { Select } from '../../../../components/select'
import { TextArea } from '../../../../components/textarea'
import { Button, ButtonTypes } from '../../../../components/button'
import { Modal } from '../../../../components/modal'
import { IMovieModalForm } from './movieModalFormTypes'
import styles from './MovieModalForm.module.scss'

export const MovieModalForm: FC<IMovieModalForm> = ({modalName, formValues}) => {

    const addMovieHandler = (event: FormEvent) => {
        event.preventDefault()
    }

    return (
        <Modal>
            <form
                className={styles.addMovieForm}
                onSubmit={addMovieHandler}
            >
                <p className={classnames('h1', styles.formTitle)}>{modalName}</p>
                <div className={classnames('row', 'smaller', styles.formGroup)}>
                    <div className={classnames('col', 'smaller', 'col-8')}>
                        <Input
                            inputType={'text'}
                            inputName={'movieTitle'}
                            labelText={'Title'}
                            inputPlaceholder={'Select Title'}
                            inputValue={formValues?.title}
                        />
                    </div>
                    <div className={classnames('col', 'smaller', 'col-4')}>
                        <Input
                            inputType={'date'}
                            inputName={'movieRelease'}
                            labelText={'Release date'}
                            inputPlaceholder={'Select Date'}
                            inputValue={formValues?.releaseDate}
                        />
                    </div>
                </div>
                <div className={classnames('row', 'smaller', styles.formGroup)}>
                    <div className={classnames('col', 'smaller', 'col-8')}>
                        <Input
                            inputType={'text'}
                            inputName={'movieUrl'}
                            labelText={'Movie url'}
                            inputPlaceholder={'https://'}
                            inputValue={formValues?.movieUrl}
                        />
                    </div>
                    <div className={classnames('col', 'smaller', 'col-4')}>
                        <Input
                            inputType={'text'}
                            inputName={'movieRating'}
                            labelText={'Rating'}
                            inputPlaceholder={'7.8'}
                            inputValue={formValues?.rating}
                        />
                    </div>
                </div>
                <div className={classnames('row', 'smaller', styles.formGroup)}>
                    <div className={classnames('col', 'smaller', 'col-8')}>
                        <Select
                            selectName={'movieGenre'}
                            labelText={'Genre'}
                        />
                    </div>
                    <div className={classnames('col', 'smaller', 'col-4')}>
                        <Input
                            inputType={'text'}
                            inputName={'movieRuntime'}
                            labelText={'Runtime'}
                            inputPlaceholder={'minutes'}
                            inputValue={formValues?.duration}
                        />
                    </div>
                </div>
                <div className={classnames('row', 'smaller', 'smaller', styles.formGroup)}>
                    <div className={classnames('col', 'smaller', 'col-12')}>
                        <TextArea
                            textAreaName={'TextOverview'}
                            labelText={'Overview'}
                            textAreaPlaceholder={'Movie description'}
                            textAreaValue={formValues?.overview}
                        />
                    </div>
                </div>
                <div className={styles.formButtons}>
                    <Button
                        buttonClassName={ButtonTypes.RESET_BTN}
                        buttonText={'Reset'}
                    />
                    <Button
                        buttonClassName={ButtonTypes.SEARCH_BTN}
                        buttonText={'Submit'}
                    />
                </div>
            </form>
        </Modal>
    )
}
