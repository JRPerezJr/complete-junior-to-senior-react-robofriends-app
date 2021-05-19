import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render() {
    const { hasError } = this.state;
    return hasError ? (
      <h1>Oh snap! Something went bad.</h1>
    ) : (
      this.props.children
    );
  }
}
