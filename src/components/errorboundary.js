import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }
    static getDerivedStateFromError() {
        return {hasError: true};
    }
    componentDidCatch(error, info) {
        console.error('Error caught by boundary:', error, info);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Something went wrong</h2>
                    <button onClick={() => window.location.reload()}>Reload Page
                    </button>
                </div>
            );
        }
        return this.props.children
    }
}

export default ErrorBoundary;