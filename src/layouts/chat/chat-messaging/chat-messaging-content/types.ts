import { MutableRefObject } from 'react';

import { IChatMessage, IChatUser } from 'interfaces/state.interfaces/chat-interface';

export interface Props {
  profileId: string | null;
  messages: IChatMessage[];
  allUserList: IChatUser[];
  chatContentRef: MutableRefObject<HTMLDivElement>;
}
