import { ReactEventHandler } from 'react';
import { PopoverProps } from '@material-ui/core/Popover';

export interface Props {
  anchorElement: PopoverProps['anchorEl'];
  handleClose: (e: ReactEventHandler) => void;
  handleSignOut: () => void;
}
