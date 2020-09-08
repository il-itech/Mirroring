import { handleActions } from 'redux-actions';

import { IStats } from 'interfaces/state.interfaces/coronavirus-interface';
import { setCoronavirusCountryStats } from 'actions/coronavirus';
import { CORONAVIRUS_REDUCER_TYPES } from 'constants';
import { getCommonReducers, getInitialState } from '../common';

export const additionalState = {
  stats: {},
};

export const countryStats = handleActions<IStats, any>(
  {
    [`${setCoronavirusCountryStats}`]: (state, { payload }) => ({
      ...state,
      stats: payload,
    }),
    ...getCommonReducers(CORONAVIRUS_REDUCER_TYPES.COUNTRY_STATS, additionalState),
  },
  getInitialState(additionalState),
);
