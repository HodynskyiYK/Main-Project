import {ReactNode} from 'react'

export interface IErrorBoundaryProps {
    children: ReactNode,
    errorText: string
}

export interface IErrorBoundaryState {
    hasError: boolean
}