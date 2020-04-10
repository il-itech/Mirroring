import PropTypes from 'prop-types';
import { resolveActions } from 'next-redux-observable';
import Container from '@material-ui/core/Container';

import {
  getCoronavirusGlobalStats,
  getCoronavirusAllCountryStats,
} from '../actions/coronavirus';
import { GlobalCoronavirusStatsList } from '../components/global-coronavirus-stats-list/global-coronavirus-stats-list';

const CoronavirusStats = ({
  coronavirus: {
    globalStats: { stats },
  },
}) => (
  <Container maxWidth="xl">
    <GlobalCoronavirusStatsList stats={stats} />
  </Container>
);

CoronavirusStats.getInitialProps = resolveActions([
  getCoronavirusGlobalStats(),
  getCoronavirusAllCountryStats(),
]);

CoronavirusStats.propTypes = {
  coronavirus: PropTypes.shape({
    globalStats: PropTypes.shape({
      stats: PropTypes.shape({}),
    }),
  }).isRequired,
};

export default CoronavirusStats;
