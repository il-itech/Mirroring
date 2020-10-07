import { FC, useMemo } from 'react';
import * as R from 'ramda';

import { Main } from 'components/main/main';
import { Header } from 'components/header/header';
import { DrawerSideBar } from 'components/drawers/drawer-side-bar/drawer-side-bar';
import { IChatUser } from 'interfaces/state.interfaces/chat-interface';
import { ChatList } from './chat-list/chat-list';
import { ChatMessaging } from './chat-messaging/chat-messaging';
import { Props } from './types';

const getCurrentChatUser = (
  roomId: string,
  allUserList: IChatUser[],
): IChatUser => R.find<IChatUser>(R.propEq('_id', roomId))(allUserList) || {
  _id: '',
  firstname: '',
  lastname: '',
  avatar: '',
};

export const Chat: FC<Props> = ({
  roomId,
  chat: { allUserList, messages },
  profileId,
  chatContentRef,
  handleSubmit,
  handleKeyPress,
}) => {
  const currentChatUser = useMemo(
    () => getCurrentChatUser(roomId, allUserList),
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
