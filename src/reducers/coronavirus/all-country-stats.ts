import { handleActions } from 'redux-actions';

import { IStats } from 'interfaces/state.interfaces/coronavirus-interface';
import { setCoronavirusAllCountryStats } from 'actions/coronavirus';
import { CORONAVIRUS_REDUCER_TYPES } from 'constants';
import { getCommonReducers, getInitialState } from '../common';

export const additionalState = {
  stats: {},
};

export const allCountryStats = handleActions<IStats, any>(
  {
    [`${setCoronavirusAllCountryStats}`]: (state, { payload }) => ({
      ...state,
      stats: payload,
    }),
    ...getCommonReducers(CORONAVIRUS_REDUCER_TYPES.ALL_COUNTRY_STATS, additionalState),
  },
  getInitialState(additionalState),
);
