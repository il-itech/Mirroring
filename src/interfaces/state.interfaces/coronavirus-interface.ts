import { ICommon } from './common-interface';

export interface IStats extends ICommon {
  stats: {};
}

export interface ICoronavirus {
  globalStats: IStats;
  allCountryStats: IStats;
  countryStats: IStats;
  fullTimelineStats: IStats;
  countryTimelineStats: IStats;
}
