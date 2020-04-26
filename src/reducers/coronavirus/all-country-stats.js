import { handleActions } from 'redux-actions';

import { getCommonReducers, getInitialState } from '../common';
import { setCoronavirusAllCountryStats } from '../../actions/coronavirus';
import { CORONAVIRUS_REDUCER_TYPES } from '../../constants';

export const additionalState = {
  stats: {},
};

export const allCountryStats = handleActions(
  {
    [setCoronavirusAllCountryStats]: (state, { payload }) => ({
      ...state,
      stats: payload,
    }),
    ...getCommonReducers(CORONAVIRUS_REDUCER_TYPES.ALL_COUNTRY_STATS, additionalState),
  },
  getInitialState(additionalState),
);
