import React, { memo, useCallback, FC } from 'react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import * as R from 'ramda';

import { useShallowSelector } from 'hooks/use-shallow-selector';
import { clearErrors } from 'actions/system';
import { ErrorBoundary } from 'components/error-boundary/error-boundary';
import { GlobalAlert } from 'components/global-alert/global-alert';
import { isEmptyOrNil } from 'helpers/utils';
import { MEDIA_QUERIES } from 'enums';
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
    R.compose(dispatch, clearErrors),
    [dispatch],
  );

  const matchesLG = useMediaQuery(`(max-width:${MEDIA_QUERIES.LG})`);

  return (
    <Container
      disableGutters={disableGutters}
      maxWidth={false}
      className={classnames('main-container pr-0', className, {
        'side-bar-indent': showSideBar && !matchesLG,
        'pl-0': matchesLG,
      })}
    >
      {!isEmptyOrNil(errorId) && (
        <GlobalAlert
          errorId={errorId as string}
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
