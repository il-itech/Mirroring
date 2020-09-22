import { IStats } from 'interfaces/state.interfaces/coronavirus-interface';

export interface Props {
  coronavirus: {
    globalStats: IStats;
    allCountryStats: IStats;
  };
}
