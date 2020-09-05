import { createActions } from 'redux-actions';

export const {
  setInProgressStatus,
  setSuccessStatus,
  clearState,
  setIntervalActions,
  clearIntervalActions,
} = createActions(
  {
    SET_IN_PROGRESS_STATUS: (field, status) => ({
      field,
      status,
    }),
    SET_SUCCESS_STATUS: (field, status) => ({
      field,
      status,
    }),
    CLEAR_STATE: field => ({
      field,
    }),
  },
  'SET_INTERVAL_ACTIONS',
  'CLEAR_INTERVAL_ACTIONS',
);
