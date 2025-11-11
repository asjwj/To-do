import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Bir hata oluştu. Lütfen daha sonra tekrar deneyin.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
