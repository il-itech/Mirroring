import { ActionCreator, createActionCreator } from 'deox';

export const setInProgressStatus = createActionCreator(
  'SET_IN_PROGRESS_STATUS',
  resolve => (field: string, status: boolean) => resolve({ field, status }),
);

export const setSuccessStatus = createActionCreator(
  'SET_SUCCESS_STATUS',
  resolve => (field: string, status: boolean) => resolve({ field, status }),
);

export const clearState = createActionCreator(
  'CLEAR_STATE',
  resolve => (field: string) => resolve({ field }),
);

export const setIntervalActions = createActionCreator(
  'SET_INTERVAL_ACTIONS',
  resolve => (actionFns: ActionCreator<string>[]) => resolve(actionFns),
);

export const clearIntervalActions = createActionCreator('CLEAR_INTERVAL_ACTIONS');
