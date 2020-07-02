import { createActions } from 'redux-actions';

import { logError } from 'helpers/logger';

export const {
  redirectTo,
  globalError,
  setGlobalInProgressStatus,
  showNotification,
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
  'SHOW_NOTIFICATION',
  'CLEAR_ERROR',
);
