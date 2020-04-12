import React, { memo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Container from '@material-ui/core/Container';
import * as R from 'ramda';

import { clearError } from '../../actions/system';
import { ErrorBoundary } from '../error-boundary/error-boundary';
import { GlobalAlert } from '../global-alert/global-alert';
import { isEmptyOrNil } from '../../helpers/utils';

export const MainUI = ({ children, className, disableGutters }) => {
  const { errorId } = useSelector(R.path(['system', 'globalError']));
  const dispatch = useDispatch();
  const dismissGlobalAlert = useCallback(
    R.compose(dispatch, clearError),
    [dispatch],
  );

  return (
    <Container
      disableGutters={disableGutters}
      maxWidth="xl"
      className={classnames(className)}
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
};

MainUI.defaultProps = {
  className: null,
  disableGutters: false,
};

export const Main = memo(MainUI);
