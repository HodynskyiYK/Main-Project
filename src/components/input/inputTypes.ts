import { ChangeEventHandler } from 'react'

export interface IInput {
    inputClassName?: string
    inputType: string
    inputName: string
    inputPlaceholder?: string
    labelText?: string,
    inputValue?: string | number | undefined,
    errorMessage?: string | null,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    onBlur?: ChangeEventHandler<HTMLInputElement>
}