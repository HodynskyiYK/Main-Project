import React, { FC } from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import styles from './Logo.module.scss'

export const Logo: FC = () => {
    const {pathname} = useLocation()

    if (pathname === '/') {
        return (
            <span className={styles.Logo}>
            <b>netflix</b>
            roulette
        </span>
        )
    }

    return (
        <NavLink
            className={styles.Logo}
            to={'/'}
        >
            <b>netflix</b>
            roulette
        </NavLink>
    )
}
