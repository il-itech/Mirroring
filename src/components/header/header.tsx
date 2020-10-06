import { memo, FC } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import * as R from 'ramda';

import { useShallowSelector } from 'hooks/use-shallow-selector';
import { useMenu } from 'hooks/use-menu';
import { RouteLink } from 'components/route-link/route-link';
import { ProfileMenu } from 'components/profile-menu/profile-menu';
import { IconLogo } from 'components/icons/icon-logo';
import { isEmptyOrNil } from 'helpers/utils';

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

  return (
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
        <RouteLink to="/">
          <IconLogo />
        </RouteLink>
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
                src={avatar || ''}
              >
                {`${R.head(firstname)} ${R.head(lastname)}`}
              </Avatar>
              <Typography className="mr-0_5">{firstname}</Typography>
              <Typography>{lastname}</Typography>
            </div>
          )}
      </Toolbar>
      <ProfileMenu
        anchorElement={anchorElement}
        handleClose={handleClose}
        handleSignOut={handleSignOut}
      />
    </AppBar>
  );
};

export const Header = memo(HeaderUI, R.equals);
