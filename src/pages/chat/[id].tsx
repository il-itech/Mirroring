import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { getAllUsers } from 'actions/chat';
import { useShallowSelector } from 'hooks/use-shallow-selector';
import { useChat } from 'hooks/chat/use-chat';
import { Chat as ChatLayout } from 'layouts/chat/chat';
import withResolveActions from 'helpers/with-resolve-actions';
import { withAuth } from 'helpers/with-auth';
import { getQueryString } from 'helpers/utils';

const Chat: NextPage<{}> = () => {
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

Chat.getInitialProps = async (ctx) => {
  await withAuth(ctx);
  await withResolveActions([getAllUsers()])(ctx);

  return { ...ctx.store.getState() };
};

export default Chat;
