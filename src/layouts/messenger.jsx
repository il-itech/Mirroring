import PropTypes from 'prop-types';

import { Main } from '../components/main/main';
import { Header } from '../components/header/header';
import { DrawerSideBar } from '../components/drawers/drawer-side-bar/drawer-side-bar';
import { ChatList } from '../components/chat-list/chat-list';
import { ChatMessaging } from '../components/chat-messaging/chat-messaging';

const IS_IN_DEVELOPMENT = true;

export const Messenger = ({ messages }) => (
  <Main
    isShowSideBar
    disableGutters
    className="h-100vhh d-flex d-flex justify-content-center align-items-center mt-8"
  >
    <Header />
    <DrawerSideBar />
    {IS_IN_DEVELOPMENT ? (
      <div className="h4 text-white">
        Section in development
      </div>
    ) : (
      <>
        <ChatList />
        <ChatMessaging
          messages={messages}
        />
      </>
    )}
  </Main>
);

Messenger.propTypes = {
  messages: PropTypes.shape({}).isRequired,
};
