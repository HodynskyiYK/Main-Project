import React, { FC } from 'react'
import { Button, ButtonTypes } from '../../components/button'
import { useMovieModalContext } from '../../context/movie-modal-context'
import { MovieModalForm } from '../movie-modal-form'

export const AddMovie: FC = () => {
    const {addMovieModalState, showAddMovieModal} = useMovieModalContext()


    return (
        <>
            <Button
                buttonClassName={ButtonTypes.ADD_BTN}
                buttonText={'+ add movie'}
                buttonAction={showAddMovieModal}
            />
            {
                addMovieModalState && <MovieModalForm modalName={'Add movie'}/>
            }
        </>
    )
}
