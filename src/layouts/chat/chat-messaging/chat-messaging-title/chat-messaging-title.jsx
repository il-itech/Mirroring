import { memo } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import * as R from 'ramda';

import './chat-messaging-title.scss';

export const ChatMessagingTitleUI = ({
  currentChatUser: {
    firstname,
    lastname,
  },
}) => (
  <div className="w-100 d-flex align-items-center p-2 bg-ebony chat-messaging-title">
    <Avatar />
    <div className="d-flex flex-column ml-2">
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

ChatMessagingTitleUI.propTypes = {
  currentChatUser: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
  }).isRequired,
};
