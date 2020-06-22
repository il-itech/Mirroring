import Typography from '@material-ui/core/Typography';

import './chat-messaging-title.scss';

export const ChatMessagingTitle = () => (
  <div className="w-100 d-flex align-items-baseline p-2 bg-ebony chat-messaging-title">
    <Typography>Avatar</Typography>
    <div className="d-flex ml-2">
      <Typography variant="caption">Name</Typography>
      <Typography variant="caption" className="ml-1">Surname</Typography>
    </div>
  </div>
);
