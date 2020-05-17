import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { RouteLink } from '../../route-link/route-link';

import './drawer-side-bar.scss';

const ROUTE_LIST = [
  { id: 1, value: 'Home', href: '/' },
  { id: 2, value: 'Messenger', href: '/messenger' },
  { id: 3, value: 'Coronavirus Stats', href: '/coronavirus-stats' },
];

export const DrawerSideBar = () => (
  <Drawer
    variant="permanent"
    classes={{
      root: 'drawer-side-bar',
      paper: 'position-fixed bg-ebony drawer-side-bar-paper',
    }}
  >
    <List
      className="d-flex flex-column"
    >
      {ROUTE_LIST.map(({ id, value, href }) => (
        <RouteLink
          key={id}
          to={href}
          copmonentClassName="text-white font-weight-bold"
        >
          <ListItem>
            <ListItemText>{value}</ListItemText>
          </ListItem>
        </RouteLink>
      ))}
    </List>
  </Drawer>
);