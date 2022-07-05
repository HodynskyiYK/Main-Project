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
        inputValue,
        errorMessage,
        onChange,
        onBlur
    }) => {

    return (
        <div className={styles.inputField}>
            {
                labelText && (
                    <label
                        className={styles.label}
                        htmlFor={inputName}
                    >{labelText}</label>
                )
            }
            <input
                className={classnames(styles.field, {
                    [styles.inputClassName]: inputClassName,
                    [styles.withError]: errorMessage
                })}
                type={inputType}
                id={inputName}
                name={inputName}
                placeholder={inputPlaceholder}
                value={inputValue}
                onChange={onChange}
                onBlur={onBlur}
            />
            {
                errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>
            }
        </div>
    )
}
