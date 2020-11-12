import { FC, memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import * as R from 'ramda';

import { toggleDrawer } from 'actions/drawers';
import { ChatLink } from 'components/chat-link/chat-link';
import { getLastMessage } from 'helpers/chat';
import { Props } from './types';

import './chat-list.scss';

export const ChatListUI: FC<Props> = ({ allUserList, messages, matchesSM }) => {
  const dispatch = useDispatch();

  const handleToggleDrawer = useCallback(
    (drawerId) => () => {
      R.compose(dispatch, toggleDrawer)(drawerId);
    },
    [dispatch],
  );

  return (
    <div className="h-100 pt-2 bg-ebony overflow-hidden chat-list">
      <Typography className="mb-2 pl-2 text-white" variant="h6">
        Chats
      </Typography>
      <div className="h-100 pb-6 overflow-auto">
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
              handleToggleDrawer={matchesSM ? handleToggleDrawer(_id) : undefined}
            />
          );
        })}
      </div>
    </div>
  );
};

export const ChatList = memo(ChatListUI, R.equals);
