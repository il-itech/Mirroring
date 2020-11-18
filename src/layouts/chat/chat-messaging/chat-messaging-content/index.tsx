import { useEffect, memo, FC } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import * as R from 'ramda';

import { IChatUser } from 'interfaces/state.interfaces/chat-interface';
import { Props } from './types';

import './index.scss';

const ChatMessagingContentUI: FC<Props> = ({
  profileId,
  messages,
  allUserList,
  chatContentRef,
}) => {
  useEffect(() => {
    const { scrollHeight } = chatContentRef.current;

    chatContentRef.current.scrollTop = scrollHeight;
  });

  return (
    <div ref={chatContentRef} className="h-100 p-2 overflow-auto chat-messaging-content">
      {messages.map(({ sender: senderId, message, date }) => {
        const { firstname, lastname } = R.find<IChatUser>(R.propEq('_id', senderId))(allUserList) || {};
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
