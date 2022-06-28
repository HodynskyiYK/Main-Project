import { ReactNode } from 'react'

export interface IButton {
    buttonClassName: string,
    buttonAction?: () => void,
    buttonText: string | ReactNode,
    buttonDisabled?: boolean
}

export enum ButtonTypes {
    ADD_BTN = 'addBtn',
    ERROR_BTN = 'errorBtn',
    SEARCH_BTN = 'searchBtn',
    RESET_BTN = 'resetBtn',
    ICON_BTN = 'iconBtn'
}