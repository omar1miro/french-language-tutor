import { Component } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Tab error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="animate-fade-in-up" style={{ textAlign: 'center', padding: 'var(--space-16) var(--space-6)' }}>
          <div className="card" style={{ maxWidth: 400, margin: '0 auto', padding: 'var(--space-10)' }}>
            <AlertTriangle size={48} style={{ color: 'var(--danger)', marginBottom: 'var(--space-4)' }} />
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-2)' }}>
              Something went wrong
            </h2>
            <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-6)' }}>
              This tab encountered an error. Please try again.
            </p>
            <button className="btn-primary" onClick={this.handleRetry} style={{ width: '100%' }}>
              <RotateCcw size={16} />
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
