import { createActionCreator } from 'deox';
import { VariantType } from 'notistack';

import { logError } from 'helpers/logger';
import { FormErrors } from 'interfaces';

export const globalError = createActionCreator(
  'GLOBAL_ERROR',
  resolve => (errorId: string, error: FormErrors) => {
    if (error) {
      logError(error);
    }

    return resolve({
      error: errorId,
      status: error.status,
    });
  },
);

export const redirectToMain = createActionCreator(
  'REDIRECT_TO_MAIN',
  resolve => () => {
    window.location.href = '/';

    return resolve({});
  },
);

export const redirectTo = createActionCreator(
  'REDIRECT_TO',
  resolve => (to: string) => resolve(to),
);

export const setGlobalInProgressStatus = createActionCreator(
  'SET_GLOBAL_IN_PROGRESS_STATUS',
  resolve => (status: boolean) => resolve(status),
);

export const showNotification = createActionCreator(
  'SHOW_NOTIFICATION',
  resolve => (notification: { variant: VariantType; message: string }) => resolve(notification),
);

export const setAccessToken = createActionCreator(
  'SET_ACCESS_TOKEN',
  resolve => (token: string) => resolve(token),
);

export const clearNotification = createActionCreator('CLEAR_NOTIFICATION');
export const clearErrors = createActionCreator('CLEAR_ERRORS');
export const clearSystem = createActionCreator('CLEAR_SYSTEM');
export const initializeState = createActionCreator('INITIALIZE_STATE');
