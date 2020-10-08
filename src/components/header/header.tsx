import { memo, FC } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import * as R from 'ramda';

import { useShallowSelector } from 'hooks/use-shallow-selector';
import { useMenu } from 'hooks/use-menu';
import { useDrawer } from 'hooks/use-drawer';
import { RouteLink } from 'components/route-link/route-link';
import { ProfileMenu } from 'components/profile-menu/profile-menu';
import { IconLogo } from 'components/icons/icon-logo';
import { isEmptyOrNil } from 'helpers/utils';
import { DRAWERS, MEDIA_QUERIES } from 'enums';

import './header.scss';

export const HeaderUI: FC<{}> = () => {
  const {
    _id,
    firstname,
    lastname,
    avatar,
  } = useShallowSelector(state => state?.profile);

  const {
    anchorElement,
    handleClick,
    handleClose,
    handleSignOut,
  } = useMenu();

  const {
    handleToggleDrawer,
  } = useDrawer(DRAWERS.SIDE_BAR);

  const matchesMD = useMediaQuery(`(max-width:${MEDIA_QUERIES.MD})`);

  return (
    <AppBar
      classes={{
        root: 'next-header',
        colorPrimary: 'bg-ebony',
      }}
      position="fixed"
    >
      <div className="h-100 px-2 d-flex align-items-center justify-content-between bg-ebony">
        {matchesMD ? (
          <MenuIcon onClick={handleToggleDrawer} />
        ) : (
          <RouteLink to="/">
            <IconLogo />
          </RouteLink>
        )}
        {isEmptyOrNil(_id)
          ? (
            <RouteLink
              to="/sign-in"
              component={Button}
              copmonentClassName="text-white"
            >
              Login
            </RouteLink>
          ) : (
            <div
              className="d-flex align-items-center text-capitalize cursor-pointer"
              onClick={handleClick}
              onKeyPress={handleClick}
              role="button"
              tabIndex={0}
            >
              <Avatar
                className="mr-1"
                src={avatar}
              >
                {`${R.head(firstname)} ${R.head(lastname)}`}
              </Avatar>
              <Typography className="mr-0_5">{firstname}</Typography>
              <Typography>{lastname}</Typography>
            </div>
          )}
      </div>
      <ProfileMenu
        anchorElement={anchorElement}
        handleClose={handleClose}
        handleSignOut={handleSignOut}
      />
    </AppBar>
  );
};

export const Header = memo(HeaderUI, R.equals);
