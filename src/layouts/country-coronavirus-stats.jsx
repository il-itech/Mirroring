import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import * as R from 'ramda';

import { Main } from 'components/main/main';
import { Header } from 'components/header/header';
import { DrawerSideBar } from 'components/drawers/drawer-side-bar/drawer-side-bar';
import { PaperList } from 'components/paper-list/paper-list';

export const CountryCoronavirusStats = ({ stats }) => {
  const { info: { title } } = stats;
  const statsList = useMemo(() => R.compose(R.drop(1), R.toPairs)(stats), [stats]);

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

CountryCoronavirusStats.propTypes = {
  stats: PropTypes.shape({
    info: PropTypes.shape({
      title: PropTypes.string,
    }),
  }).isRequired,
};
