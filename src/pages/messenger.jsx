import * as R from 'ramda';

import { useShallowSelector } from '../hooks/use-shallow-selector';
import { Main } from '../components/main/main';
import { Header } from '../components/header/header';
import { DrawerSideBar } from '../components/drawers/drawer-side-bar/drawer-side-bar';
import { ChatList } from '../components/chat-list/chat-list';
import { ChatMessaging } from '../components/chat-messaging/chat-messaging';
import { REDUCER_TYPES } from '../constants';

const IS_IN_DEVELOPMENT = true;

const Messenger = () => {
  const { messages } = useShallowSelector(R.path([REDUCER_TYPES.MESSENGER]));

  return (
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
};

export default Messenger;
