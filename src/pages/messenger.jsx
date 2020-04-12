import { Main } from '../components/main/main';
import { ChatList } from '../components/chat-list/chat-list';
import { ChatMessaging } from '../components/chat-messaging/chat-messaging';

const IS_IN_DEVELOPMENT = true;

const Messenger = () => (
  <Main
    disableGutters
    className="h-100vhh d-flex d-flex justify-content-center align-items-center mt-8"
  >
    {IS_IN_DEVELOPMENT ? (
      <div className="h4 text-white">
        Section in development
      </div>
    ) : (
      <>
        <ChatList />
        <ChatMessaging />
      </>
    )}
  </Main>
);

export default Messenger;
