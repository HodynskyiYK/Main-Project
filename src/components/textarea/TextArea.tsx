import React, { FC } from 'react'
import classnames from 'classnames'
import { ITextArea } from './textareaTypes'
import styles from './TextArea.module.scss'

export const TextArea: FC<ITextArea> = (
    {
        textAreaName,
        textAreaPlaceholder,
        labelText,
        textAreaValue,
        onChange,
        onBlur
    }) => {

    return (
        <>
            {
                labelText && (
                    <label
                        className={styles.Label}
                        htmlFor={textAreaName}
                    >{labelText}</label>
                )
            }
            <textarea
                className={classnames(styles.TextArea)}
                name={textAreaName}
                id={textAreaName}
                cols={30}
                rows={7}
                placeholder={textAreaPlaceholder}
                value={textAreaValue}
                onChange={onChange}
                onBlur={onBlur}
            />
        </>
    )
}
