import React, { FC } from 'react'
import styles from './Logo.module.scss'
import Link from 'next/link'

export const Logo: FC = () => {

    return (
        <Link href={'/search'}>
            <a className={styles.Logo}>
                <b>netflix</b>
                roulette
            </a>
        </Link>
    )
}
