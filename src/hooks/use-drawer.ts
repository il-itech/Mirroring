
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { toggleDrawer, closeAllDrawers } from 'actions/drawers';
import { useShallowSelector } from 'hooks/use-shallow-selector';

export type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const useDrawer = (drawerId: string) => {
  const dispatch = useDispatch();
  const isDrawerOpen = useShallowSelector(state => state?.drawers[drawerId]);

  const handleToggleDrawer = useCallback(
    () => {
      R.compose(dispatch, toggleDrawer)(drawerId);
    },
    [dispatch, drawerId],
  );

  const handleCloseAll = useCallback(
    () => {
      R.compose(dispatch, closeAllDrawers)();
    },
    [dispatch],
  );

  return {
    isDrawerOpen,
    handleToggleDrawer,
    handleCloseAll,
  };
};
