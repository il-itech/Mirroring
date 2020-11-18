import { FC, useMemo } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import * as R from 'ramda';

import { Main } from 'components/main';
import { Header } from 'components/header';
import { DrawerSideBar } from 'components/drawers/drawer-side-bar';
import { DrawerChatMessaging } from 'components/drawers/drawer-chat-messaging';
import { IChatUser } from 'interfaces/state.interfaces/chat-interface';
import { MEDIA_QUERIES } from 'enums';
import { ChatList } from './chat-list';
import { ChatMessaging } from './chat-messaging';
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
  const matchesSM = useMediaQuery(`(max-width:${MEDIA_QUERIES.SM})`);

  return (
    <Main
      showSideBar
      disableGutters
      className="h-100vhh d-flex d-flex justify-content-center align-items-center mt-7 mx-xl-0"
    >
      <Header />
      <DrawerSideBar />
      <div className="w-100 h-100 d-flex">
        <ChatList
          allUserList={allUserList}
          messages={messages}
          matchesSM={matchesSM}
        />
        {matchesSM ? (
          <DrawerChatMessaging
            roomId={roomId}
            profileId={profileId}
            messages={messagesById}
            allUserList={allUserList}
            currentChatUser={currentChatUser}
            chatContentRef={chatContentRef}
            handleSubmit={handleSubmit}
            handleKeyPress={handleKeyPress}
          />
        ) : (
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
        )}
      </div>
    </Main>
  );
};
