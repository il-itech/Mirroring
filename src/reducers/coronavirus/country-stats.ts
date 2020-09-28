import { createReducer } from 'deox';

import { setCoronavirusCountryStats } from 'actions/coronavirus';
import { CORONAVIRUS_REDUCER_TYPES } from 'enums';
import { getCommonReducers, getInitialState } from '../common';

export const initialState = getInitialState({
  stats: {},
});

export const countryStats = createReducer(
  initialState,
  handleAction => ([
    handleAction(setCoronavirusCountryStats, (state, { payload }) => ({
      ...state,
      stats: payload,
    })),
    ...getCommonReducers(CORONAVIRUS_REDUCER_TYPES.COUNTRY_STATS, initialState, handleAction),
  ]),
);
