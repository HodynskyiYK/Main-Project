import React, { FC } from 'react'
import styles from './Loader.module.scss'

export const Loader: FC = () => {
    return (
        <div className={styles.loaderContent}>
            <span className={styles.loader}/>
        </div>
    )
}
