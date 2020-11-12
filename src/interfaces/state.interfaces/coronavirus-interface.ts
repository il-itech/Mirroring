import { ICommon } from './common-interface';

export type IStats = Record<string, any>;

export interface ICommonStats extends ICommon {
  stats: IStats;
}

export interface IAllCountryStats extends ICommon {
  stats: Record<number, IStats>;
}

export interface ICoronavirus {
  globalStats: ICommonStats;
  allCountryStats: IAllCountryStats;
  countryStats: ICommonStats;
  fullTimelineStats: ICommonStats;
  countryTimelineStats: ICommonStats;
}
