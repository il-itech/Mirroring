import Typography from '@material-ui/core/Typography';

import { Main } from 'components/main';
import { Header } from 'components/header';
import { DrawerSideBar } from 'components/drawers/drawer-side-bar';
import { Tabs } from 'components/tabs';
import { AccountGeneral } from './account-general';
import { AccountSecurity } from './account-security';

import './index.scss';

const TABS = [
  { id: 0, value: 'general' },
  { id: 1, value: 'security' },
];

const TAB_PANELS = [
  { id: 0, Component: AccountGeneral },
  { id: 1, Component: AccountSecurity },
];

export const Account = () => (
  <Main
    showSideBar
    className="mt-10_5 account"
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
