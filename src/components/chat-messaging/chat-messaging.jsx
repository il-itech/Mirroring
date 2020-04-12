import { ChatMessagingTitle } from './chat-messaging-title/chat-messaging-title';
import { ChatMessagingContent } from './chat-messaging-content/chat-messaging-content';
import { ChatMessagingText } from './chat-messaging-text/chat-messaging-text';

export const ChatMessaging = () => (
  <div className="h-100 w-100 d-flex flex-column">
    <ChatMessagingTitle />
    <ChatMessagingContent />
    <ChatMessagingText />
  </div>
);
