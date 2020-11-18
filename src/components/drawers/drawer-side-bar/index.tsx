import { useMemo, memo } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import NoSsr from '@material-ui/core/NoSsr';
import * as R from 'ramda';

import { useShallowSelector } from 'hooks/use-shallow-selector';
import { useDrawer } from 'hooks/use-drawer';
import { RouteLink } from 'components/route-link';
import { isEmptyOrNil } from 'helpers/utils';
import { DRAWERS, MEDIA_QUERIES } from 'enums';
import { RouteList } from './types';

import './index.scss';

const getRoutesList = (profileId: string | null): RouteList[] => ([
  {
    id: 1,
    value: 'Home',
    href: '/',
  },
  {
    id: 2,
    value: 'Chat',
    href: isEmptyOrNil(profileId) ? '/sign-in' : `/chat/${profileId}`,
  },
  // TODO: Temporarily
  // {
  //   id: 3,
  //   value: 'Coronavirus Stats',
  //   href: '/coronavirus-stats',
  // },
]);

export const DrawerSideBarUI = () => {
  const { _id } = useShallowSelector(state => state?.profile);
  const routesList = useMemo(() => getRoutesList(_id), [_id]);
  const matchesLG = useMediaQuery(`(max-width:${MEDIA_QUERIES.LG})`);
  const {
    isDrawerOpen,
    handleToggleDrawer,
    handleCloseAll,
  } = useDrawer(DRAWERS.SIDE_BAR);

  return (
    <NoSsr>
      <Drawer
        variant={matchesLG ? 'temporary' : 'permanent'}
        classes={{
          root: 'drawer-side-bar',
          paper: 'position-fixed bg-ebony drawer-side-bar-paper border-white-12',
        }}
        anchor="left"
        open={isDrawerOpen}
        onClose={handleToggleDrawer}
      >
        <CloseIcon
          onClick={handleToggleDrawer}
          className="text-white ml-2 mt-2_5"
        />
        <List
          className="d-flex flex-column"
        >
          {routesList.map(({
            id,
            value,
            href,
          }) => (
            <RouteLink
              key={id}
              to={href}
              copmonentClassName="text-white font-weight-bold link-hover"
              handleClick={handleCloseAll}
            >
              <ListItem>
                <ListItemText>{value}</ListItemText>
              </ListItem>
            </RouteLink>
          ))}
        </List>
      </Drawer>
    </NoSsr>
  );
};

export const DrawerSideBar = memo(DrawerSideBarUI, R.equals);
