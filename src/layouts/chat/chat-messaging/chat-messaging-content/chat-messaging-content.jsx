import { memo } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import * as R from 'ramda';

import './chat-messaging-content.scss';

const ChatMessagingContentUI = ({
  profileId,
  messages,
  allUserList,
}) => (
  <div className="h-100 p-2 overflow-auto chat-messaging">
    {messages.map(({ sender: senderId, message }) => {
      const { firstname, lastname } = R.find(R.propEq('_id', senderId))(allUserList);
      const isAuthorMessage = profileId === senderId;

      return (
        <Paper
          key={message}
          className={classnames('bg-ebony py-1 px-2 mt-2 text-white message-block', {
            'bg-blue author-message': isAuthorMessage,
          })}
        >
          <Typography variant="body1">{firstname} {lastname}</Typography>
          <Typography variant="body2" className="mt-1 text-break">{message}</Typography>
        </Paper>
      );
    })}
  </div>
);

export const ChatMessagingContent = memo(ChatMessagingContentUI, R.equals);

ChatMessagingContentUI.propTypes = {
  profileId: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.shape({
    sender: PropTypes.string,
    message: PropTypes.string,
  })).isRequired,
  allUserList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

ChatMessagingContentUI.defaultProps = {
  profileId: null,
};
