import React, { FC, useState } from 'react'
import { Modal } from '../../components/modal'
import { IMovieModalForm } from './movieModalFormTypes'
import styles from './MovieModalForm.module.scss'
import classnames from 'classnames'
import { Input } from '../../components/input'
import { Select } from '../../components/select'
import { movieFormValidate, MOVIE_GENRES } from './movieModalFormConstans'
import { TextArea } from '../../components/textarea'
import { Button, ButtonTypes } from '../../components/button'
import { useAction, useTypedSelector } from '../../hooks'
import { useFormik } from 'formik'
import { IMovieItem } from '../../store/actions-types'
import { fillEmptyMovieFields } from '../../utils'
import { CompletionMoviePopup } from './CompletionMoviePopup'


export const MovieModalForm: FC<IMovieModalForm> = ({modalName, formValues}) => {
    const [addMovieSuccess, setAddMovieSuccess] = useState(false)
    const {sortBy, filterBy} = useTypedSelector(state => state.movies)
    const {addMovie, updateMovie, fetchMovies} = useAction()
    const movieForm = useFormik({
        initialValues: {
            title: formValues?.title || '',
            tagline: formValues?.tagline || '',
            vote_average: formValues?.vote_average || '',
            vote_count: formValues?.vote_count || '',
            release_date: formValues?.release_date || '',
            poster_path:  formValues?.poster_path || '',
            overview:  formValues?.overview || '',
            budget:  formValues?.budget || '',
            revenue:  formValues?.revenue || '',
            runtime:  formValues?.runtime || '',
            genres:  formValues?.genres[0] || ''
        } as IMovieItem,
        validate: movieFormValidate,
        onSubmit: async (values, {resetForm}) => {
            const movie: IMovieItem = fillEmptyMovieFields(values)
            let responseStatus
            if (formValues) {
                const updatedMovie = {
                    ...movie,
                    id: formValues.id
                }
                responseStatus = await updateMovie(updatedMovie)
            } else {
                responseStatus = await addMovie(movie)
            }
            if (+responseStatus <= 299) {
                resetForm()
                fetchMovies(filterBy, sortBy)
                setAddMovieSuccess(true)
            }
        }
    })

    return (
        <Modal>{
            !addMovieSuccess ? (
                <form
                    className={styles.addMovieForm}
                    onSubmit={movieForm.handleSubmit}
                >
                    <p className={classnames('h1', styles.formTitle)}>{modalName}</p>
                    <div className={classnames('row', 'smaller', styles.formGroup)}>
                        <div className={classnames('col', 'smaller', 'col-8')}>
                            <Input
                                inputType={'text'}
                                inputName={'title'}
                                labelText={'Title'}
                                inputPlaceholder={'Select Title'}
                                onChange={movieForm.handleChange}
                                onBlur={movieForm.handleBlur}
                                inputValue={movieForm.values.title}
                                errorMessage={movieForm.touched.title ? movieForm.errors.title : null}
                            />
                        </div>
                        <div className={classnames('col', 'smaller', 'col-4')}>
                            <Input
                                inputType={'date'}
                                inputName={'release_date'}
                                labelText={'Release date'}
                                inputPlaceholder={'Select Date'}
                                onChange={movieForm.handleChange}
                                onBlur={movieForm.handleBlur}
                                inputValue={movieForm.values.release_date}
                                errorMessage={movieForm.touched.release_date ? movieForm.errors.release_date : null}
                            />
                        </div>
                    </div>
                    <div className={classnames('row', 'smaller', styles.formGroup)}>
                        <div className={classnames('col', 'smaller', 'col-8')}>
                            <Input
                                inputType={'text'}
                                inputName={'poster_path'}
                                labelText={'Movie url'}
                                inputPlaceholder={'https://'}
                                onChange={movieForm.handleChange}
                                onBlur={movieForm.handleBlur}
                                inputValue={movieForm.values.poster_path}
                                errorMessage={movieForm.touched.poster_path ? movieForm.errors.poster_path : null}
                            />
                        </div>
                        <div className={classnames('col', 'smaller', 'col-4')}>
                            <Input
                                inputType={'number'}
                                inputName={'vote_average'}
                                labelText={'Rating'}
                                inputPlaceholder={'7.8'}
                                onChange={movieForm.handleChange}
                                onBlur={movieForm.handleBlur}
                                inputValue={movieForm.values.vote_average}
                                errorMessage={movieForm.touched.vote_average ? movieForm.errors.vote_average : null}
                            />
                        </div>
                    </div>
                    <div className={classnames('row', 'smaller', styles.formGroup)}>
                        <div className={classnames('col', 'smaller', 'col-8')}>
                            <Select
                                selectName={'genres'}
                                labelText={'Genre'}
                                onChange={movieForm.handleChange}
                                onBlur={movieForm.handleBlur}
                                options={MOVIE_GENRES}
                            />
                        </div>
                        <div className={classnames('col', 'smaller', 'col-4')}>
                            <Input
                                inputType={'number'}
                                inputName={'runtime'}
                                labelText={'Runtime'}
                                inputPlaceholder={'minutes'}
                                onChange={movieForm.handleChange}
                                onBlur={movieForm.handleBlur}
                                inputValue={movieForm.values.runtime}
                                errorMessage={movieForm.touched.runtime ? movieForm.errors.runtime : null}
                            />
                        </div>
                    </div>
                    <div className={classnames('row', 'smaller', 'smaller', styles.formGroup)}>
                        <div className={classnames('col', 'smaller', 'col-12')}>
                            <TextArea
                                textAreaName={'overview'}
                                labelText={'Overview'}
                                textAreaPlaceholder={'Movie description'}
                                onChange={movieForm.handleChange}
                                onBlur={movieForm.handleBlur}
                                textAreaValue={movieForm.values.overview}
                            />
                        </div>
                    </div>
                    <div className={styles.formButtons}>
                        <Button
                            buttonClassName={ButtonTypes.RESET_BTN}
                            buttonText={'Reset'}
                            buttonType={'reset'}
                            buttonAction={movieForm.handleReset}
                        />
                        <Button
                            buttonClassName={ButtonTypes.SEARCH_BTN}
                            buttonText={'Submit'}
                        />
                    </div>
                </form>
            ) : (
                <CompletionMoviePopup completionText={formValues ? 'The movie has been updated to database successfully' : 'The movie has been added to database successfully'}/>
            )
        }</Modal>
    )
}
