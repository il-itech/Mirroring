import { NextPage } from 'next';

import { resolveActions, NextContext } from 'helpers/resolve-actions';
import { getCoronavirusCountryStats } from 'actions/coronavirus';
import { CountryCoronavirusStats as CountryCoronavirusStatsLayout } from 'layouts/country-coronavirus-stats';
import { IState } from 'interfaces/state.interfaces';
import { Props } from 'interfaces/pages.interfaces/country-coronavirus-stats.interface';

const CountryStats: NextPage<Props> = ({
  coronavirus: {
    countryStats: { stats },
  },
}) => (
  <CountryCoronavirusStatsLayout
    stats={stats}
  />
);

CountryStats.getInitialProps = (ctx: NextContext): Promise<IState> => resolveActions([
  getCoronavirusCountryStats(ctx.query.code),
])(ctx);

export default CountryStats;
