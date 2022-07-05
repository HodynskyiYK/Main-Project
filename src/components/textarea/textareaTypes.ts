import { ChangeEventHandler } from 'react'

export interface ITextArea {
    textAreaClassName?: string
    textAreaName: string
    textAreaPlaceholder?: string
    labelText?: string,
    textAreaValue?: string,
    onChange?: ChangeEventHandler<HTMLTextAreaElement>,
    onBlur?: ChangeEventHandler<HTMLTextAreaElement>
}