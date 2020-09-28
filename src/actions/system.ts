import { createActionCreator } from 'deox';
import { VariantEnum } from 'enums';

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
  resolve => (notification: { variant: VariantEnum.default; message: string | null }) => resolve(notification),
);

export const clearNotification = createActionCreator('CLEAR_NOTIFICATION');
export const clearErrors = createActionCreator('CLEAR_ERRORS');
export const clearSystem = createActionCreator('CLEAR_SYSTEM');
