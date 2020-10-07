import { useState, ReactEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { signOut } from 'actions/auth';

interface IUseMenu {
  anchorElement: HTMLElement | null;
  handleClick: ReactEventHandler<HTMLElement>;
  handleClose: ReactEventHandler;
  handleSignOut: ReactEventHandler;
}

export const useMenu = (): IUseMenu => {
  const dispatch = useDispatch();
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
  const handleClick: ReactEventHandler<HTMLElement> = ({ currentTarget }) => setAnchorElement(currentTarget);
  const handleClose: ReactEventHandler = () => setAnchorElement(null);
  const handleSignOut: ReactEventHandler = () => {
    setAnchorElement(null);
    R.compose(dispatch, signOut)();
  };

  return {
    anchorElement,
    handleClick,
    handleClose,
    handleSignOut,
  };
};
