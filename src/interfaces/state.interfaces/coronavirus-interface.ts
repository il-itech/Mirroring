import { ICommon } from './common-interface';

export interface IStats {
  [key: string]: any;
}

export interface ICommonStats extends ICommon {
  stats: IStats;
}

export interface IAllCountryStats extends ICommon {
  stats: {
    [key: number]: IStats;
  };
}

export interface ICoronavirus {
  globalStats: ICommonStats;
  allCountryStats: IAllCountryStats;
  countryStats: ICommonStats;
  fullTimelineStats: ICommonStats;
  countryTimelineStats: ICommonStats;
}
