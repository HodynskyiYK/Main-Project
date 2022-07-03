export interface IInput {
    inputClassName?: string
    inputType: string
    inputName: string
    inputPlaceholder?: string
    labelText?: string,
    inputValue?: string | number | undefined,
    errorMessage?: string | null,
    onChange?: (e: any) => any,
    onBlur?: (e: any) => any
}