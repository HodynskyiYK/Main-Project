import React, { Component, ErrorInfo } from "react"
import {IErrorBoundaryProps, IErrorBoundaryState} from './errorBoundaryTypes'
import { Button, ButtonTypes } from '../../components/button'
import styles from './ErrorBoundary.module.scss'

export class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
    public state: IErrorBoundaryState = {
        hasError: false
    }

    public static getDerivedStateFromError(_: Error): IErrorBoundaryState {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo)
    }

    resetError = () => {
        this.setState({
            hasError: false
        })
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className={styles.errorContent}>
                    <div className={styles.errorCard}>
                        <h2 className={styles.errorMessage}>{this.props.errorText}</h2>
                        <Button
                            buttonClassName={ButtonTypes.ERROR_BTN}
                            buttonAction={this.resetError}
                            buttonText={'Try again'}
                        />
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}