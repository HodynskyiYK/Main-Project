import React, { FC } from 'react'
import styles from './MovieModalForm.module.scss'
import { COMPLETION_ICON_66_66 } from '../../../../assets/svg/CompletionIcon'
import classnames from 'classnames'

interface ICompletionMoviePopup {
    completionText: string
}

export const CompletionMoviePopup: FC<ICompletionMoviePopup> = ({completionText}) => {
    return (
        <div className={styles.completionMovie}>
            <div className={styles.completionIcon}>{
                COMPLETION_ICON_66_66
            }</div>
            <p className={classnames('h1', styles.completionTitle)}>congratulations !</p>
            <p className={styles.completionText}>{completionText}</p>
        </div>
    )
}
