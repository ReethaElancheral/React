import React from 'react';

const withErrorBoundary = (WrappedComponent, FallbackComponent = DefaultFallback) => {
  return class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
      console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        return <FallbackComponent error={this.state.error} />;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

// Default fallback UI
const DefaultFallback = ({ error }) => (
  <div style={{ color: 'red', padding: '20px' }}>
    <h3>Something went wrong.</h3>
    <p>{error?.message}</p>
  </div>
);

export default withErrorBoundary;
