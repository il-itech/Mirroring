import { handleActions } from 'redux-actions';

import { ICommonStats } from 'interfaces/state.interfaces/coronavirus-interface';
import { setCoronavirusAllCountryStats } from 'actions/coronavirus';
import { CORONAVIRUS_REDUCER_TYPES } from 'enums';
import { getCommonReducers, getInitialState } from '../common';

export const additionalState = {
  stats: {},
};

export const allCountryStats = handleActions<ICommonStats, any>(
  {
    [`${setCoronavirusAllCountryStats}`]: (state, { payload }) => ({
      ...state,
      stats: payload,
    }),
    ...getCommonReducers(CORONAVIRUS_REDUCER_TYPES.ALL_COUNTRY_STATS, additionalState),
  },
  getInitialState(additionalState),
);
