import { RefObject } from 'react';

import { IChatMessage, IChatUser } from 'interfaces/state.interfaces/chat-interface';

export interface Props {
  profileId: string;
  messages: IChatMessage[];
  allUserList: IChatUser[];
  chatContentRef: RefObject<HTMLDivElement>;
}
