import { useRouter } from 'next/router';

import { getAllUsers } from 'actions/chat';
import { useShallowSelector } from 'hooks/use-shallow-selector';
import { useChat } from 'hooks/use-chat';
import { Chat as ChatLayout } from 'layouts/chat';
import withResolveActions from 'helpers/with-resolve-actions';
import { withAuth } from 'helpers/with-auth';
import { getQueryString } from 'helpers/utils';
import { wrapper } from 'storage';

const Chat = () => {
  const { query: { id } } = useRouter();
  const roomId = getQueryString(id);
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

export const getServerSideProps = wrapper.getServerSideProps(
  async (ctx) => {
    await withAuth(ctx);
    await withResolveActions([
      getAllUsers(),
    ])(ctx);

    return { props: ctx.store.getState() };
  },
);

export default Chat;
