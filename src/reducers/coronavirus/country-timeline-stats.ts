import { createReducer } from 'deox';

import { setCoronavirusCountryTimelineStats } from 'actions/coronavirus';
import { CORONAVIRUS_REDUCER_TYPES } from 'enums';
import { getCommonReducers, getInitialState } from '../common';

export const initialState = getInitialState({
  stats: {},
});

export const countryTimelineStats = createReducer(
  initialState,
  handleAction => ([
    handleAction(setCoronavirusCountryTimelineStats, (state, { payload }) => ({
      ...state,
      stats: payload,
    })),
    ...getCommonReducers(CORONAVIRUS_REDUCER_TYPES.COUNTRY_TIMELINE_STATS, initialState, handleAction),
  ]),
);
