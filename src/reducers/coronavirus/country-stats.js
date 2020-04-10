import { handleActions } from 'redux-actions';

import { getCommonReducers, getInitialState } from '../common';
import { setCoronavirusCountryStats } from '../../actions/coronavirus';
import { REDUCER_TYPES } from '../../constants';

export const additionalState = {
  stats: {},
};

export const countryStats = handleActions(
  {
    [setCoronavirusCountryStats]: (state, { payload }) => ({
      ...state,
      stats: payload,
    }),
    ...getCommonReducers(REDUCER_TYPES.CORONAVIRUS.COUNTRY_STATS, additionalState),
  },
  getInitialState(additionalState),
);
