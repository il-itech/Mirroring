import { useChat } from 'hooks/chat/use-chat';
import { Messenger as MessengerLayout } from 'layouts/messenger/messenger';

const Messenger = () => {
  const { messages } = useChat();

  return (
    <MessengerLayout
      messages={messages}
    />
  );
};

export default Messenger;
