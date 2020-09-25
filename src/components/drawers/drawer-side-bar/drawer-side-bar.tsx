import { useMemo, memo, FC } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import * as R from 'ramda';

import { useShallowSelector } from 'hooks/use-shallow-selector';
import { RouteLink } from 'components/route-link/route-link';
import { isEmptyOrNil } from 'helpers/utils';
import { RouteList } from './types';

import './drawer-side-bar.scss';

const getRoutesList = (profileId: string | null): RouteList[] => ([
  {
    id: 1,
    value: 'Home',
    href: '/',
    as: {},
  },
  {
    id: 2,
    value: 'Chat',
    href: isEmptyOrNil(profileId) ? '/sign-in' : '/chat/[id]',
    as: isEmptyOrNil(profileId) ? '/sign-in' : `/chat/${profileId}`,
  },
  {
    id: 3,
    value: 'Coronavirus Stats',
    href: '/coronavirus-stats',
    as: {},
  },
]);

export const DrawerSideBarUI: FC<{}> = () => {
  const { _id } = useShallowSelector(state => state?.profile);
  const routesList = useMemo(() => getRoutesList(_id), [_id]);

  return (
    <Drawer
      variant="permanent"
      classes={{
        root: 'drawer-side-bar',
        paper: 'position-fixed bg-ebony drawer-side-bar-paper border-white-12',
      }}
    >
      <List
        className="d-flex flex-column"
      >
        {routesList.map(({
          id,
          value,
          href,
          as,
        }) => (
          <RouteLink
            key={id}
            to={href}
            as={as}
            copmonentClassName="text-white font-weight-bold link-hover"
          >
            <ListItem>
              <ListItemText>{value}</ListItemText>
            </ListItem>
          </RouteLink>
        ))}
      </List>
    </Drawer>
  );
};

export const DrawerSideBar = memo(DrawerSideBarUI, R.equals);