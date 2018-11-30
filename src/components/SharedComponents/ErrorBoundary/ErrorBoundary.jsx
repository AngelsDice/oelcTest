import React, { Component } from 'react';

import styles from './ErrorBoundary.module.scss';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // need to update the error message with something more meaningful
      return <h1 className={styles.heading}>Something went wrong.</h1>;
    }
    return children;
  }
}
