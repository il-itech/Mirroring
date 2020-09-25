import React, { memo, useCallback, FC } from 'react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import Container from '@material-ui/core/Container';
import * as R from 'ramda';

import { useShallowSelector } from 'hooks/use-shallow-selector';
import { clearError } from 'actions/system';
import { ErrorBoundary } from 'components/error-boundary/error-boundary';
import { GlobalAlert } from 'components/global-alert/global-alert';
import { isEmptyOrNil } from 'helpers/utils';

import { Props } from './types';

import './main.scss';

export const MainUI: FC<Props> = ({
  children,
  className = null,
  disableGutters = false,
  showSideBar = false,
}) => {
  const { errorId } = useShallowSelector(state => state?.system?.globalError);
  const dispatch = useDispatch();
  const dismissGlobalAlert = useCallback(
    R.compose(dispatch, clearError),
    [dispatch],
  );

  return (
    <Container
      disableGutters={disableGutters}
      maxWidth={false}
      className={classnames('main-container pr-0', className, {
        'side-bar-indent': showSideBar,
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

export const Main = memo(MainUI);