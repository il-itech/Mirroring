import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { logError } from 'helpers/logger';
import { GlobalAlert } from '../global-alert/global-alert';

export class ErrorBoundary extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    dismissGlobalAlert: PropTypes.func.isRequired,
  };

  state = {
    hasError: false,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });

    logError(error, { extra: errorInfo });
  }

  render() {
    const { children, dismissGlobalAlert } = this.props;
    const { hasError } = this.state;

    return hasError
      ? <GlobalAlert dismissGlobalAlert={dismissGlobalAlert} />
      : children;
  }
}
