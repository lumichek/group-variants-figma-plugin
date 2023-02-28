import * as React from 'react';

export type TErrorBoundaryProps = {
  children: React.ReactNode;
}

export type TErrorBoundaryState = {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<TErrorBoundaryProps, TErrorBoundaryState> {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={'error__block'}>
          {'Something went wrong, please reload the plugin or check your component'}
        </div>
      );
    }

    return this.props.children;
  }
}