import React, { FC } from 'react'
import styles from './Select.module.scss'
import { ISelect } from './selectTypes'

export const Select: FC<ISelect> = (
    {
        selectName,
        labelText
    }) => {

    return (
        <>
            {
                labelText && (
                    <label
                        className={styles.Label}
                        htmlFor={selectName}
                    >{labelText}</label>
                )
            }
            <select
                className={styles.Select}
                name={selectName}
                id={selectName}
            >
                <option value="SelectGenre">Select Genre</option>
            </select>
        </>
    )
}
