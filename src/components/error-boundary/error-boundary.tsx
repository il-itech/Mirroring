import React, { PureComponent, ReactNode } from 'react';

import { logError } from 'helpers/logger';
import { GlobalAlert } from '../global-alert/global-alert';
import { Props } from './types';

export class ErrorBoundary extends PureComponent<Props, {}> {
  state = {
    hasError: false,
  };

  public componentDidCatch(error: Error, errorInfo: {}): void {
    this.setState({ hasError: true });

    logError(error, { extra: errorInfo });
  }

  render(): ReactNode {
    const { children, dismissGlobalAlert } = this.props;
    const { hasError } = this.state;

    return hasError
      ? <GlobalAlert dismissGlobalAlert={dismissGlobalAlert} />
      : children;
  }
}
