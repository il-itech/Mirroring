import { FC, memo } from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import * as R from 'ramda';

import { Props } from './types';

import './chat-messaging-title.scss';

export const ChatMessagingTitleUI: FC<Props> = ({
  currentChatUser: {
    firstname,
    lastname,
    avatar,
  },
}) => (
  <div className="w-100 d-flex align-items-center p-2 bg-ebony chat-messaging-title">
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
);

export const ChatMessagingTitle = memo(ChatMessagingTitleUI, R.equals);
