import { NextPage } from 'next';

import withResolveActions from 'helpers/with-resolve-actions';
import { getCoronavirusCountryStats } from 'actions/coronavirus';
import { CountryCoronavirusStats as CountryCoronavirusStatsLayout } from 'layouts/country-coronavirus-stats';
import { Props } from 'interfaces/pages.interfaces/country-coronavirus-stats.interface';
import * as R from 'ramda';
import { withAuth } from 'helpers/with-auth';
import { withProps } from 'helpers/with-props';

const CountryStats: NextPage<Props> = ({
  coronavirus: {
    countryStats: { stats },
  },
}) => (
  <CountryCoronavirusStatsLayout
    stats={stats}
  />
);

export const getServerSideProps = R.compose(
  withProps,
  withAuth,
  (ctx) => withResolveActions([
    getCoronavirusCountryStats(ctx.query.code),
  ])(ctx),
);

export default CountryStats;
