import { createReducer } from 'deox';

import { setCoronavirusGlobalStats } from 'actions/coronavirus';
import { CORONAVIRUS_REDUCER_TYPES } from 'enums';
import { getCommonReducers, getInitialState } from '../common';

export const initialState = getInitialState({
  stats: {},
});

export const globalStats = createReducer(
  initialState,
  handleAction => ([
    handleAction(setCoronavirusGlobalStats, (state, { payload }) => ({
      ...state,
      stats: payload,
    })),
    ...getCommonReducers(CORONAVIRUS_REDUCER_TYPES.GLOBAL_STATS, initialState, handleAction),
  ]),
);
