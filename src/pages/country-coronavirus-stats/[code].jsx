import PropTypes from 'prop-types';

import { resolveActions } from '../../helpers/resolve-actions';

import { getCoronavirusCountryStats } from '../../actions/coronavirus';
import { CountryCoronavirusStats as CountryCoronavirusStatsLayout } from '../../layouts/country-coronavirus-stats';

const CountryStats = ({
  coronavirus: {
    countryStats: { stats },
  },
}) => (
  <CountryCoronavirusStatsLayout
    stats={stats}
  />
);

CountryStats.getInitialProps = ctx => resolveActions([
  getCoronavirusCountryStats(ctx.query.code),
])(ctx);

CountryStats.propTypes = {
  coronavirus: PropTypes.shape({
    countryStats: PropTypes.shape({
      stats: PropTypes.shape({}).isRequired,
    }),
  }).isRequired,
};

export default CountryStats;
