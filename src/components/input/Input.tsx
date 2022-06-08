import React, { FC } from 'react'
import classnames from 'classnames'
import styles from './Input.module.scss'
import { IInput } from './inputTypes'

export const Input: FC<IInput> = (
    {
        inputClassName,
        inputName,
        inputPlaceholder,
        inputType,
        labelText,
        inputValue
    }) => {

    return (
        <>
            {
                labelText && (
                    <label
                        className={styles.Label}
                        htmlFor={inputName}
                    >{labelText}</label>
                )
            }
            <input
                className={classnames(styles.Input, inputClassName && `${styles[inputClassName]}`)}
                type={inputType}
                id={inputName}
                name={inputName}
                placeholder={inputPlaceholder}
                value={inputValue}
            />
        </>
    )
}
