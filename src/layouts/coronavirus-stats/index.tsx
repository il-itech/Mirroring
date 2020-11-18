import { FC } from 'react';
import { Typography } from '@material-ui/core';

import { Main } from 'components/main';
import { Header } from 'components/header';
import { DrawerSideBar } from 'components/drawers/drawer-side-bar';
import { PaperList } from 'components/paper-list';
import { IStats } from 'interfaces/state.interfaces/coronavirus-interface';
import { CoronavirusCountryStatsTable } from './coronavirus-country-stats-table';

interface Props {
  statsList: [string, number][];
  allCountryStats: Record<number, IStats>;
}

export const CoronavirusStats: FC<Props> = ({ statsList, allCountryStats }) => (
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
