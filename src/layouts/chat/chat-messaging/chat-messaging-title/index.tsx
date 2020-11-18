import { FC, memo } from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import * as R from 'ramda';

import { useDrawer } from 'hooks/use-drawer';
import { Props } from './types';

import './index.scss';

export const ChatMessagingTitleUI: FC<Props> = ({
  roomId,
  currentChatUser: {
    firstname,
    lastname,
    avatar,
  },
}) => {
  const {
    handleToggleDrawer,
  } = useDrawer(roomId);

  return (
    <div className="w-100 d-flex align-items-center justify-content-between p-2 bg-ebony chat-messaging-title">
      <ArrowBackIcon onClick={handleToggleDrawer} className="d-sm-none text-white" />

      <div className="d-flex">
        <Avatar src={avatar} />
        <div className="d-flex flex-column ml-2 text-white">
          <div className="d-flex">
            <Typography
              variant="body2"
              className="font-weight-bold"
            >
              {firstname}
            </Typography>
            <Typography
              variant="body2"
              className="ml-0_5 font-weight-bold"
            >
              {lastname}
            </Typography>
          </div>
          <Typography variant="caption">status</Typography>
        </div>
      </div>
    </div>
  );
};

export const ChatMessagingTitle = memo(ChatMessagingTitleUI, R.equals);
