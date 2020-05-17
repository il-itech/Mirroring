import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Container from '@material-ui/core/Container';
import * as R from 'ramda';

import { useShallowSelector } from '../../hooks/use-shallow-selector';
import { clearError } from '../../actions/system';
import { ErrorBoundary } from '../error-boundary/error-boundary';
import { GlobalAlert } from '../global-alert/global-alert';
import { isEmptyOrNil } from '../../helpers/utils';

import './main.scss';

export const MainUI = ({
  children,
  className,
  disableGutters,
  isShowSideBar,
}) => {
  const { errorId } = useShallowSelector(R.path(['system', 'globalError']));
  const dispatch = useDispatch();
  const dismissGlobalAlert = useCallback(
    R.compose(dispatch, clearError),
    [dispatch],
  );

  return (
    <Container
      disableGutters={disableGutters}
      maxWidth="xl"
      className={classnames('main-container', className, {
        'side-bar-indent': isShowSideBar,
      })}
    >
      {!isEmptyOrNil(errorId) && (
        <GlobalAlert
          errorId={errorId}
          dismissGlobalAlert={dismissGlobalAlert}
        />
      )}

      <ErrorBoundary dismissGlobalAlert={dismissGlobalAlert}>
        {children}
      </ErrorBoundary>
    </Container>
  );
};

MainUI.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disableGutters: PropTypes.bool,
  isShowSideBar: PropTypes.bool,
};

MainUI.defaultProps = {
  className: null,
  disableGutters: false,
  isShowSideBar: false,
};

export const Main = memo(MainUI);
