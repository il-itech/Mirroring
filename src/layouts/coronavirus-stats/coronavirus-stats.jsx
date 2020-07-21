import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

import { Main } from 'components/main/main';
import { Header } from 'components/header/header';
import { DrawerSideBar } from 'components/drawers/drawer-side-bar/drawer-side-bar';
import { PaperList } from 'components/paper-list/paper-list';
import { CoronavirusCountryStatsTable } from './coronavirus-country-stats-table/coronavirus-country-stats-table';

export const CoronavirusStats = ({ statsList, allCountryStats }) => (
  <Main
    showSideBar
    className="mt-10_5 pr-0"
  >
    <div className="px-3">
      <Header />
      <DrawerSideBar />
      <Typography className="text-white" variant="h5">
        Global Stats
      </Typography>
      <PaperList list={statsList} />
      <Typography className="mt-3 mb-2 text-white" variant="h5">
        Country Stats
      </Typography>
      <CoronavirusCountryStatsTable tableData={allCountryStats} />
    </div>
  </Main>
);

CoronavirusStats.propTypes = {
  statsList: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)).isRequired,
  allCountryStats: PropTypes.shape({}).isRequired,
};
