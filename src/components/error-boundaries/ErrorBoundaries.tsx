import React, { Component, ErrorInfo } from "react"
import {IErrorBoundaryProps, IErrorBoundaryState} from './errorBoundaryTypes'

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

    public render() {
        if (this.state.hasError) {
            return (
                <div className="error-content">
                    <div className="error-card">
                        <h2 className="error-message">{this.props.errorText}</h2>
                        <button
                            className="btn error-btn"
                            onClick={() => this.setState({
                                hasError: false
                            })}
                        >Try again</button>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}