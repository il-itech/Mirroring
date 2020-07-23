import PropTypes from 'prop-types';

import { ChatMessagingTitle } from './chat-messaging-title/chat-messaging-title';
import { ChatMessagingContent } from './chat-messaging-content/chat-messaging-content';
import { ChatMessagingText } from './chat-messaging-text/chat-messaging-text';

export const ChatMessaging = ({
  roomId,
  profileId,
  messages,
  allUserList,
  currentChatUser,
  chatContentRef,
  handleSubmit,
  handleKeyPress,
}) => (
  <div className="h-100 w-75 d-flex flex-column">
    <ChatMessagingTitle currentChatUser={currentChatUser} />
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

ChatMessaging.propTypes = {
  roomId: PropTypes.string.isRequired,
  profileId: PropTypes.string,
  currentChatUser: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
  }).isRequired,
  allUserList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  chatContentRef: PropTypes.shape({
    current: PropTypes.node,
  }).isRequired,
};

ChatMessaging.defaultProps = {
  profileId: null,
};
