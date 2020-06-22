import PropTypes from 'prop-types';

import { Main } from '../../components/main/main';
import { Header } from '../../components/header/header';
import { DrawerSideBar } from '../../components/drawers/drawer-side-bar/drawer-side-bar';
import { ChatList } from './chat-list/chat-list';
import { ChatMessaging } from './chat-messaging/chat-messaging';

const IS_IN_DEVELOPMENT = false;

export const Messenger = () => (
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
        <ChatMessaging />
      </>
    )}
  </Main>
);

Messenger.propTypes = {
  messages: PropTypes.shape({}).isRequired,
};
