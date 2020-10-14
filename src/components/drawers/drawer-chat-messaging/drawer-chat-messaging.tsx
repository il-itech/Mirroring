import Drawer from '@material-ui/core/Drawer';
import NoSsr from '@material-ui/core/NoSsr';

import { useDrawer } from 'hooks/use-drawer';
import { ChatMessaging } from 'layouts/chat/chat-messaging/chat-messaging';
import { Props } from './types';

export const DrawerChatMessaging = (props: Props) => {
  const {
    isDrawerOpen,
    handleToggleDrawer,
  } = useDrawer(props.roomId);

  return (
    <NoSsr>
      <Drawer
        variant="temporary"
        classes={{
          paper: 'w-100 bg-black-of-pearl',
        }}
        anchor="right"
        open={isDrawerOpen}
        onClose={handleToggleDrawer}
      >
        <ChatMessaging {...props} />
      </Drawer>
    </NoSsr>
  );
};
