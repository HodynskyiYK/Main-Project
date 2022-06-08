import React, { FC } from 'react'
import classnames from 'classnames'
import { IButton } from './buttonTypes'
import styles from './Button.module.scss'

export const Button: FC<IButton> = ({buttonClassName, buttonAction, buttonText}) => {

    return (
        <button
            className={classnames(styles.btn, `${styles[buttonClassName]}`)}
            onClick={buttonAction}
        >
            {buttonText}
        </button>
    )
}
