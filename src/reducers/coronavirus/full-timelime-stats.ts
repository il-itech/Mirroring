import { createReducer } from 'deox';

import { setCoronavirusFullTimelineStats } from 'actions/coronavirus';
import { CORONAVIRUS_REDUCER_TYPES } from 'enums';
import { getCommonReducers, getInitialState } from '../common';

export const initialState = getInitialState({
  stats: {},
});

export const fullTimelineStats = createReducer(
  initialState,
  handleAction => ([
    handleAction(setCoronavirusFullTimelineStats, (state, { payload }) => ({
      ...state,
      stats: payload,
    })),
    ...getCommonReducers(CORONAVIRUS_REDUCER_TYPES.FULL_TIMELINE_STATS, initialState, handleAction),
  ]),
);
