import { handleActions } from 'redux-actions';

import { getCommonReducers, getInitialState } from '../common';
import { setCoronavirusCountryStats } from '../../actions/coronavirus';
import { CORONAVIRUS_REDUCER_TYPES } from '../../constants';

export const additionalState = {
  stats: {},
};

export const countryStats = handleActions(
  {
    [setCoronavirusCountryStats]: (state, { payload }) => ({
      ...state,
      stats: payload,
    }),
    ...getCommonReducers(CORONAVIRUS_REDUCER_TYPES.COUNTRY_STATS, additionalState),
  },
  getInitialState(additionalState),
);
