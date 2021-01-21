import { MouseEventHandler, KeyboardEvent, MutableRefObject } from 'react';
import { IChatMessage, IChatUser } from 'interfaces/state.interfaces/chat-interface';

export interface Props {
  roomId: string;
  profileId: string | null;
  messages: IChatMessage[];
  allUserList: IChatUser[];
  currentChatUser: IChatUser;
  chatContentRef: MutableRefObject<HTMLDivElement | undefined>;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
  handleKeyPress: (event: KeyboardEvent<HTMLFormElement>) => void;
}
