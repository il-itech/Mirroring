import { handleActions } from 'redux-actions';

import { getCommonReducers, getInitialState } from '../common';
import { setCoronavirusAllCountryStats } from '../../actions/coronavirus';
import { REDUCER_TYPES } from '../../constants';

export const additionalState = {
  stats: {},
};

export const allCountryStats = handleActions(
  {
    [setCoronavirusAllCountryStats]: (state, { payload }) => ({
      ...state,
      allCountryStats: payload,
    }),
    ...getCommonReducers(REDUCER_TYPES.CORONAVIRUS.ALL_COUNTRY_STATS, additionalState),
  },
  getInitialState(additionalState),
);
