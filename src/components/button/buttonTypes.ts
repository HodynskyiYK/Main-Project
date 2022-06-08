export interface IButton {
    buttonClassName: string,
    buttonAction?: () => void,
    buttonText: string,
}

export enum ButtonTypes {
    ADD_BTN = 'addBtn',
    ERROR_BTN = 'errorBtn',
    SEARCH_BTN = 'searchBtn',
    RESET_BTN = 'resetBtn'
}