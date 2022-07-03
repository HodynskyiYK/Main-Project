export interface ITextArea {
    textAreaClassName?: string
    textAreaName: string
    textAreaPlaceholder?: string
    labelText?: string,
    textAreaValue?: string,
    onChange?: (e: any) => any,
    onBlur?: (e: any) => any
}