import React, { FC } from 'react'
import classnames from 'classnames'
import { IButton } from './buttonTypes'
import styles from './Button.module.scss'

export const Button: FC<IButton> = ({buttonClassName, buttonAction, buttonText, buttonDisabled, buttonType}) => {

    return (
        <button
            className={classnames(styles.btn, `${styles[buttonClassName]}`, {
                [styles.buttonDisabled]: buttonDisabled
            })}
            onClick={buttonAction}
            disabled={buttonDisabled}
            type={buttonType}
        >
            {buttonText}
        </button>
    )
}
