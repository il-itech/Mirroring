import { combineEpics } from 'redux-observable';

import { fetchCoronavirusGlobalStatsEpic } from './fetch-coronavirus-global-stats';
import { fetchCoronavirusAllCountryStatsEpic } from './fetch-coronavirus-all-country-stats';

export const coronavirusStatEpic = combineEpics(
  fetchCoronavirusGlobalStatsEpic,
  fetchCoronavirusAllCountryStatsEpic,
);
