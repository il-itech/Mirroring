import { IAllCountryStats, ICommonStats } from 'interfaces/state.interfaces/coronavirus-interface';

export interface Props {
  coronavirus: {
    globalStats: ICommonStats;
    allCountryStats: IAllCountryStats;
  };
}
