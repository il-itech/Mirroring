import { FC } from 'react';

import { ChatMessagingTitle } from './chat-messaging-title';
import { ChatMessagingContent } from './chat-messaging-content';
import { ChatMessagingText } from './chat-messaging-text';
import { Props } from './types';

import './index.scss';

export const ChatMessaging: FC<Props> = ({
  roomId,
  profileId,
  messages,
  allUserList,
  currentChatUser,
  chatContentRef,
  handleSubmit,
  handleKeyPress,
}) => (
  <div className="h-100 d-flex flex-column chat-messaging">
    <ChatMessagingTitle
      roomId={roomId}
      currentChatUser={currentChatUser}
    />
    <ChatMessagingContent
      profileId={profileId}
      messages={messages}
      allUserList={allUserList}
      chatContentRef={chatContentRef}
    />
    <ChatMessagingText
      roomId={roomId}
      handleSubmit={handleSubmit}
      handleKeyPress={handleKeyPress}
    />
  </div>
);
