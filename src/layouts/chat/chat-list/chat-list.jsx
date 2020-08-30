import { memo } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import * as R from 'ramda';

import { ChatLink } from 'components/chat-link/chat-link';
import { getLastMessage } from 'helpers/chat';

import './chat-list.scss';

export const ChatListUI = ({ allUserList, messages }) => (
  <div className="w-25 pt-2 bg-ebony chat-list">
    <Typography className="mb-2 pl-2 text-white" variant="h6">
      Chats
    </Typography>
    {allUserList.map(({
      _id,
      firstname,
      lastname,
      avatar,
    }) => {
      const lastMessage = getLastMessage(_id, messages);

      return (
        <ChatLink
          key={_id}
          href="/chat/[id]"
          as={`/chat/${_id}`}
          firstname={firstname}
          lastname={lastname}
          lastMessage={lastMessage}
          avatar={avatar}
        />
      );
    })}
  </div>
);

export const ChatList = memo(ChatListUI, R.equals);

ChatListUI.propTypes = {
  allUserList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      avatar: PropTypes.string,
    }),
  ).isRequired,
  messages: PropTypes.shape({}).isRequired,
};
