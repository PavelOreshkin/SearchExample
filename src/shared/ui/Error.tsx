import type React from 'react';
import { Component } from 'react';

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props> {
  state: State;
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
    // тут нужно подключить Sentry
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <div>Что-то пошло не так.</div>;
    }

    return this.props.children;
  }
}
