import { useMemo } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import { Main } from 'components/main/main';
import { Header } from 'components/header/header';
import { DrawerSideBar } from 'components/drawers/drawer-side-bar/drawer-side-bar';
import { ChatList } from './chat-list/chat-list';
import { ChatMessaging } from './chat-messaging/chat-messaging';

const IS_IN_DEVELOPMENT = false;

export const Chat = ({
  roomId,
  chat: { allUserList, messages },
  profileId,
  onSubmit,
}) => {
  const currentChatUser = useMemo(
    () => R.find(R.propEq('_id', roomId))(allUserList),
    [allUserList, roomId],
  );
  const messagesById = useMemo(() => R.prop(roomId, messages) || [], [messages, roomId]);

  return (
    <Main
      showSideBar
      disableGutters
      className="h-100vhh d-flex d-flex justify-content-center align-items-center mt-8 mx-xl-0"
    >
      <Header />
      <DrawerSideBar />
      {IS_IN_DEVELOPMENT ? (
        <div className="h4 text-white">
          Section in development
        </div>
      ) : (
        <div className="w-100 h-100 d-flex">
          <ChatList
            allUserList={allUserList}
            messages={messages}
          />
          <ChatMessaging
            roomId={roomId}
            profileId={profileId}
            messages={messagesById}
            allUserList={allUserList}
            currentChatUser={currentChatUser}
            onSubmit={onSubmit}
          />
        </div>
      )}
    </Main>
  );
};

Chat.propTypes = {
  chat: PropTypes.shape({
    allUserList: PropTypes.arrayOf(PropTypes.shape({})),
    messages: PropTypes.shape({}).isRequired,
  }).isRequired,
  roomId: PropTypes.string.isRequired,
  profileId: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

Chat.defaultProps = {
  profileId: null,
};
