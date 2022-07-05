import { ChangeEventHandler } from 'react'

export interface ISelect {
    selectName: string,
    labelText?: string,
    options: string[],
    onChange?: ChangeEventHandler<HTMLSelectElement>,
    onBlur?: ChangeEventHandler<HTMLSelectElement>
}