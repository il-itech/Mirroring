import { useChat } from 'hooks/chat/use-chat';
import { Chat as ChatLayout } from 'layouts/chat/chat';

const Chat = () => {
  const { messages } = useChat();

  return (
    <ChatLayout
      messages={messages}
    />
  );
};

export default Chat;
