import PropTypes from 'prop-types';

import { ChatMessagingTitle } from './chat-messaging-title/chat-messaging-title';
import { ChatMessagingContent } from './chat-messaging-content/chat-messaging-content';
import { ChatMessagingText } from './chat-messaging-text/chat-messaging-text';

export const ChatMessaging = ({ messages }) => (
  <div className="h-100 w-100 d-flex flex-column">
    <ChatMessagingTitle />
    <ChatMessagingContent />
    <ChatMessagingText
      messages={messages}
    />
  </div>
);

ChatMessaging.propTypes = {
  messages: PropTypes.shape({}).isRequired,
};
