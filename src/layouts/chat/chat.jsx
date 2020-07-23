import { useMemo } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import { Main } from 'components/main/main';
import { Header } from 'components/header/header';
import { DrawerSideBar } from 'components/drawers/drawer-side-bar/drawer-side-bar';
import { ChatList } from './chat-list/chat-list';
import { ChatMessaging } from './chat-messaging/chat-messaging';

export const Chat = ({
  roomId,
  chat: { allUserList, messages },
  profileId,
  chatContentRef,
  handleSubmit,
  handleKeyPress,
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
          chatContentRef={chatContentRef}
          handleSubmit={handleSubmit}
          handleKeyPress={handleKeyPress}
        />
      </div>
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
  handleSubmit: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  chatContentRef: PropTypes.shape({
    current: PropTypes.node,
  }).isRequired,
};

Chat.defaultProps = {
  profileId: null,
};
