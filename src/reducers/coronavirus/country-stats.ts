import { handleActions } from 'redux-actions';

import { ICommonStats } from 'interfaces/state.interfaces/coronavirus-interface';
import { setCoronavirusCountryStats } from 'actions/coronavirus';
import { CORONAVIRUS_REDUCER_TYPES } from 'enums';
import { getCommonReducers, getInitialState } from '../common';

export const additionalState = {
  stats: {},
};

export const countryStats = handleActions<ICommonStats, any>(
  {
    [`${setCoronavirusCountryStats}`]: (state, { payload }) => ({
      ...state,
      stats: payload,
    }),
    ...getCommonReducers(CORONAVIRUS_REDUCER_TYPES.COUNTRY_STATS, additionalState),
  },
  getInitialState(additionalState),
);
