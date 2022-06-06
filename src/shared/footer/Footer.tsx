import React, {FC} from 'react'
import classnames from 'classnames'
import styles from './Footer.module.scss'
import { Logo } from '../../components/logo'

export const Footer: FC = () => {

    return (
        <footer className={styles.footer}>
            <div className={classnames('container', styles.footerContent)}>
                <p className={styles.copyright}>
                    <Logo/>
                </p>
            </div>
        </footer>
    )
}
