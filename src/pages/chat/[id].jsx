import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { getAllUsers } from 'actions/chat';
import { useShallowSelector } from 'hooks/use-shallow-selector';
import { useChat } from 'hooks/chat/use-chat';
import { Chat as ChatLayout } from 'layouts/chat/chat';
import { resolveActions } from 'helpers/resolve-actions';

const Chat = () => {
  const { query: { id: roomId } } = useRouter();
  const {
    chat,
    chatContentRef,
    handleSubmit,
    handleKeyPress,
  } = useChat(roomId);
  const profileId = useShallowSelector(state => state?.profile?._id);

  return (
    <ChatLayout
      chat={chat}
      roomId={roomId}
      profileId={profileId}
      chatContentRef={chatContentRef}
      handleSubmit={handleSubmit}
      handleKeyPress={handleKeyPress}
    />
  );
};

Chat.getInitialProps = ctx => resolveActions([
  getAllUsers(),
])(ctx);

Chat.propTypes = {
  chat: PropTypes.shape({}).isRequired,
};

export default Chat;
