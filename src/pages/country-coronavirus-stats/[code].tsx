import { NextPage } from 'next';

import withResolveActions from 'helpers/with-resolve-actions';
import { getCoronavirusCountryStats } from 'actions/coronavirus';
import { CountryCoronavirusStats as CountryCoronavirusStatsLayout } from 'layouts/country-coronavirus-stats';
import { Props } from 'interfaces/pages.interfaces/country-coronavirus-stats.interface';
import { withAuth } from 'helpers/with-auth';

const CountryStats: NextPage<Props> = ({
  coronavirus: {
    countryStats: { stats },
  },
}) => (
  <CountryCoronavirusStatsLayout
    stats={stats}
  />
);

CountryStats.getInitialProps = async (ctx) => {
  await withAuth(ctx);
  await withResolveActions([
    getCoronavirusCountryStats(ctx.query.code as string),
  ])(ctx);

  return { ...ctx.store.getState() };
};

export default CountryStats;
