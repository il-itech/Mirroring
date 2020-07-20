import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { signOut } from 'actions/auth';

export const useMenu = () => {
  const dispatch = useDispatch();
  const [anchorElement, setAnchorElement] = useState(null);
  const handleClick = ({ currentTarget }) => setAnchorElement(currentTarget);
  const handleClose = () => setAnchorElement(null);
  const handleSignOut = () => {
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
