import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import { Main } from 'components/main/main';
import { Header } from 'components/header/header';
import { DrawerSideBar } from 'components/drawers/drawer-side-bar/drawer-side-bar';
import { Tabs } from 'components/tabs/tabs';
import { AccountGeneral } from './account-general/account-general';

const TABS = [
  { id: 0, value: 'general' },
  { id: 1, value: 'security' },
];

const TAB_PANELS = [
  { id: 0, Component: AccountGeneral },
];

export const Account = () => (
  <Main
    showSideBar
    className="mt-10_5"
  >
    <div className="px-3">
      <Header />
      <DrawerSideBar />
      <Typography className="text-white" variant="h5">
        Settings
      </Typography>
      <Tabs
        tabs={TABS}
        tabPanels={TAB_PANELS}
      />
    </div>
  </Main>
);
