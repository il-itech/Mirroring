import { createActionCreator } from 'deox';

import { IStats } from 'interfaces/state.interfaces/coronavirus-interface';

export const getCoronavirusGlobalStats = createActionCreator('GET_CORONAVIRUS_GLOBAL_STATS');
export const setCoronavirusGlobalStats = createActionCreator(
  'SET_CORONAVIRUS_GLOBAL_STATS',
  resolve => (stats: IStats) => resolve(stats),
);

export const getCoronavirusAllCountryStats = createActionCreator('GET_CORONAVIRUS_ALL_COUNTRY_STATS');
export const setCoronavirusAllCountryStats = createActionCreator(
  'SET_CORONAVIRUS_ALL_COUNTRY_STATS',
  resolve => (stats: IStats[]) => resolve(stats),
);

export const getCoronavirusCountryStats = createActionCreator(
  'GET_CORONAVIRUS_COUNTRY_STATS',
  resolve => (countryCode: string) => resolve(countryCode),
);

export const setCoronavirusCountryStats = createActionCreator(
  'SET_CORONAVIRUS_COUNTRY_STATS',
  resolve => (stats: IStats) => resolve(stats),
);

export const getCoronavirusFullTimelineStats = createActionCreator('GET_CORONAVIRUS_FULL_TIMELINE_STATS');
export const setCoronavirusFullTimelineStats = createActionCreator(
  'SET_CORONAVIRUS_FULL_TIMELINE_STATS',
  resolve => (stats: IStats) => resolve(stats),
);

export const getCoronavirusCountryTimelineStats = createActionCreator('GET_CORONAVIRUS_COUNTRY_TIMELINE_STATS');
export const setCoronavirusCountryTimelineStats = createActionCreator(
  'SET_CORONAVIRUS_COUNTRY_TIMELINE_STATS',
  resolve => (stats: IStats) => resolve(stats),
);
