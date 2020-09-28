import { createReducer } from 'deox';

import { setCoronavirusAllCountryStats } from 'actions/coronavirus';
import { CORONAVIRUS_REDUCER_TYPES } from 'enums';
import { getCommonReducers, getInitialState } from '../common';

export const initialState = getInitialState({
  stats: {},
});

export const allCountryStats = createReducer(
  initialState,
  handleAction => ([
    handleAction(setCoronavirusAllCountryStats, (state, { payload }) => ({
      ...state,
      stats: payload,
    })),
    ...getCommonReducers(CORONAVIRUS_REDUCER_TYPES.ALL_COUNTRY_STATS, initialState, handleAction),
  ]),
);
