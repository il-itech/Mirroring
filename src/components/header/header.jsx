import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { RouteLink } from '../route-link/route-link';

import './header.scss';

const ROUTE_LIST = [
  { id: 1, value: 'Home', href: '/' },
  { id: 2, value: 'Messenger', href: '/messenger' },
  { id: 3, value: 'Coronavirus Stats', href: '/coronavirus-stats' },
];

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
      <div className="d-flex">
        {ROUTE_LIST.map(({ id, value, href }) => (
          <RouteLink
            key={id}
            component={Button}
            copmonentClassName="text-white font-weight-bold"
            to={href}
          >
            {value}
          </RouteLink>
        ))}
      </div>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);
