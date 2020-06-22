import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import './chat-list.scss';

export const ChatList = () => (
  <div className="pt-2 bg-ebony chat-list">
    <Typography className="mb-2 pl-2 text-white" variant="h6">
      Chats
    </Typography>
    <Link href="saved-messages">
      <div className="d-flex py-1 px-2 cursor-pointer chat-contact">
        <Avatar />
        <div className="d-flex flex-column ml-2">
          <Typography variant="body1">Saved Messages</Typography>
          <Typography variant="body2" className="text-mischka">Message</Typography>
        </div>
      </div>
    </Link>
  </div>
);
