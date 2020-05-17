import { resolveActions } from '../helpers/resolve-actions';

import {
  getCoronavirusGlobalStats,
  getCoronavirusAllCountryStats,
} from '../actions/coronavirus';
import { CoronavirusStats as CoronavirusStatsLayout } from '../layouts/coronavirus-stats';

const CoronavirusStats = CoronavirusStatsLayout;

CoronavirusStats.getInitialProps = resolveActions([
  getCoronavirusGlobalStats(),
  getCoronavirusAllCountryStats(),
]);

export default CoronavirusStats;
