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

export const MainUI = ({ children, className }) => {
  const { errorId } = useSelector(R.path(['system', 'globalError']));
  const dispatch = useDispatch();
  const dismissGlobalAlert = useCallback(
    R.compose(dispatch, clearError),
    [dispatch],
  );

  return (
    <Container
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
};

MainUI.defaultProps = {
  className: null,
};

export const Main = memo(MainUI);
