export interface ISelect {
    selectName: string,
    labelText?: string,
    options: string[],
    onChange?: (e: any) => any,
    onBlur?: (e: any) => any
}