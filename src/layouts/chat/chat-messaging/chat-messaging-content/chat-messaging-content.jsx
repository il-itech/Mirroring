import { useEffect, memo } from 'react';
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
  chatContentRef,
}) => {
  useEffect(() => {
    const { scrollHeight } = chatContentRef.current;

    chatContentRef.current.scrollTop = scrollHeight;
  }, [chatContentRef]);

  return (
    <div ref={chatContentRef} className="h-100 p-2 overflow-auto chat-messaging">
      {messages.map(({ sender: senderId, message, date }) => {
        const { firstname, lastname } = R.find(R.propEq('_id', senderId))(allUserList);
        const isAuthorMessage = profileId === senderId;

        return (
          <div
            key={date}
            className={classnames('d-flex flex-column message-block', {
              'author-message': isAuthorMessage,
            })}
          >
            <Paper
              className={classnames('bg-ebony py-1 px-2 mt-2 text-white', {
                'bg-blue': isAuthorMessage,
              })}
            >
              <Typography variant="body1">{firstname} {lastname}</Typography>
              <Typography variant="body2" className="mt-2 text-break">{message}</Typography>
            </Paper>
            <Typography variant="caption" className="mt-0_5 text-half-baked">{date}</Typography>
          </div>
        );
      })}
    </div>
  );
};

export const ChatMessagingContent = memo(ChatMessagingContentUI, R.equals);

ChatMessagingContentUI.propTypes = {
  profileId: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.shape({
    sender: PropTypes.string,
    message: PropTypes.string,
    date: PropTypes.string,
  })).isRequired,
  allUserList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  chatContentRef: PropTypes.shape({
    current: PropTypes.node,
  }).isRequired,
};

ChatMessagingContentUI.defaultProps = {
  profileId: null,
};
