import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { RouteLink } from '../route-link/route-link';
import { IconLogo } from '../icons/icon-logo';

import './header.scss';

export const Header = () => (
  <AppBar
    classes={{
      root: 'next-header',
    }}
    position="fixed"
  >
    <Toolbar classes={{
      root: 'd-flex justify-content-between bg-ebony',
    }}
    >
      <a href="/">
        <IconLogo />
      </a>
      <RouteLink
        to="/sign-in"
        component={Button}
        copmonentClassName="text-white"
      >
        Login
      </RouteLink>
    </Toolbar>
  </AppBar>
);
