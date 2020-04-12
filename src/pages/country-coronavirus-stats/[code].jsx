import PropTypes from 'prop-types';
import { resolveActions } from 'next-redux-observable';
import * as R from 'ramda';

import { getCoronavirusCountryStats } from '../../actions/coronavirus';
import { Main } from '../../components/main/main';
import { PaperList } from '../../components/paper-list/paper-list';

const CountryStats = ({
  coronavirus: {
    countryStats: { stats },
  },
}) => {
  const statsList = R.compose(R.drop(1), R.toPairs)(stats);

  return (
    <Main className="mt-10_5">
      <PaperList list={statsList} />
    </Main>
  );
};

CountryStats.getInitialProps = ctx => resolveActions([
  getCoronavirusCountryStats(ctx.query.code),
])(ctx);

CountryStats.propTypes = {
  coronavirus: PropTypes.shape({
    countryStats: PropTypes.shape({
      stats: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
};

export default CountryStats;
