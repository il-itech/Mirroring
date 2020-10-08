import { FC, memo } from 'react';
import Typography from '@material-ui/core/Typography';
import * as R from 'ramda';

import { ChatLink } from 'components/chat-link/chat-link';
import { getLastMessage } from 'helpers/chat';
import { Props } from './types';

import './chat-list.scss';

export const ChatListUI: FC<Props> = ({ allUserList, messages }) => (
  <div className="h-100 w-25 pt-2 bg-ebony chat-list">
    <Typography className="mb-2 pl-2 text-white" variant="h6">
      Chats
    </Typography>
    <div className="h-100 overflow-auto">
      {allUserList.concat(allUserList).map(({
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
  </div>
);

export const ChatList = memo(ChatListUI, R.equals);
