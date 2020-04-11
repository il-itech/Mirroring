import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { GlobalAlert } from '../global-alert/global-alert';
import { logError } from '../../helpers/error-logger';

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
