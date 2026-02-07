import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                    <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full border-l-4 border-red-500">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
                        <div className="bg-red-50 p-4 rounded-md mb-4 overflow-auto max-h-[60vh]">
                            <p className="text-red-700 font-mono text-sm break-all font-bold mb-2">
                                {this.state.error?.message}
                            </p>
                            <pre className="text-red-600 font-mono text-xs whitespace-pre-wrap">
                                {this.state.error?.stack}
                            </pre>
                        </div>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
