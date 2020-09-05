import { createActions } from 'redux-actions';

import { logError } from 'helpers/logger';

export const {
  globalError,
  redirectToMain,
  redirectTo,
  setGlobalInProgressStatus,
  showNotification,
  clearNotification,
  clearError,
  clearSystem,
} = createActions(
  {
    GLOBAL_ERROR: (errorId, error) => {
      if (error) {
        logError(error);
      }

      return {
        error: errorId,
        status: error.status,
      };
    },
    REDIRECT_TO_MAIN: () => {
      window.location.href = '/';
    },
  },
  'REDIRECT_TO',
  'SET_GLOBAL_IN_PROGRESS_STATUS',
  'SHOW_NOTIFICATION',
  'CLEAR_NOTIFICATION',
  'CLEAR_ERROR',
  'CLEAR_SYSTEM',
);
