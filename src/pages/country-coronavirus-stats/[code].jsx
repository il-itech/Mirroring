import { resolveActions } from '../../helpers/resolve-actions';

import { getCoronavirusCountryStats } from '../../actions/coronavirus';
import { CountryCoronavirusStats as CountryCoronavirusStatsLayout } from '../../layouts/country-coronavirus-stats';

const CountryStats = CountryCoronavirusStatsLayout;

CountryStats.getInitialProps = ctx => resolveActions([
  getCoronavirusCountryStats(ctx.query.code),
])(ctx);

export default CountryStats;
