import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import * as R from 'ramda';

import { Main } from '../components/main/main';
import { Header } from '../components/header/header';
import { DrawerSideBar } from '../components/drawers/drawer-side-bar/drawer-side-bar';
import { PaperList } from '../components/paper-list/paper-list';

export const CountryCoronavirusStats = ({
  coronavirus: {
    countryStats: { stats },
  },
}) => {
  const { info: { title } } = stats;
  const statsList = useMemo(() => R.compose(R.drop(1), R.toPairs)(stats), [stats]);

  return (
    <Main
      isShowSideBar
      className="mt-10_5"
    >
      <Header />
      <DrawerSideBar />
      <Typography className="text-white" variant="h5">
        {title}
      </Typography>
      <PaperList list={statsList} />
    </Main>
  );
};

CountryCoronavirusStats.propTypes = {
  coronavirus: PropTypes.shape({
    countryStats: PropTypes.shape({
      stats: PropTypes.shape({
        info: PropTypes.shape({
          title: PropTypes.string,
        }),
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
