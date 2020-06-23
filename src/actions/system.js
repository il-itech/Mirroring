import { createActions } from 'redux-actions';

import { logError } from 'helpers/logger';

export const {
  redirectTo,
  globalError,
  setGlobalInProgressStatus,
  clearError,
} = createActions(
  {
    REDIRECT_TO: (href) => {
      window.location.href = href;
    },
    GLOBAL_ERROR: (errorId, error) => {
      if (error) {
        logError(error);
      }

      return {
        error: errorId,
        status: error.status,
      };
    },
  },
  'SET_GLOBAL_IN_PROGRESS_STATUS',
  'CLEAR_ERROR',
);
