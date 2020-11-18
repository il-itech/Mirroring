import { FC, useMemo } from 'react';
import { Typography } from '@material-ui/core';
import * as R from 'ramda';

import { Main } from 'components/main';
import { Header } from 'components/header';
import { DrawerSideBar } from 'components/drawers/drawer-side-bar';
import { PaperList } from 'components/paper-list';
import { IStats } from 'interfaces/state.interfaces/coronavirus-interface';

interface Props {
  stats: IStats;
}

const serializeStatsList = R.compose<IStats, any, [string, number][]>(
  R.drop(1),
  R.toPairs,
);

export const CountryCoronavirusStats: FC<Props> = ({
  stats,
  stats: { info: { title } },
}) => {
  const statsList = useMemo(() => serializeStatsList(stats), [stats]);

  return (
    <Main
      showSideBar
      className="mt-10_5"
    >
      <div className="px-3">
        <Header />
        <DrawerSideBar />
        <Typography className="text-white" variant="h5">
          {title}
        </Typography>
        <PaperList list={statsList} />
      </div>
    </Main>
  );
};
