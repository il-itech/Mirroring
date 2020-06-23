import Typography from '@material-ui/core/Typography';

import { ChatLink } from 'components/chat-link/chat-link';

import './chat-list.scss';

export const ChatList = () => (
  <div className="pt-2 bg-ebony chat-list">
    <Typography className="mb-2 pl-2 text-white" variant="h6">
      Chats
    </Typography>
    <ChatLink
      href="/chat/[id]"
      as="/chat/saved-messages"
    />
  </div>
);
