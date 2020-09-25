import { RefObject, SyntheticEvent } from 'react';
import { IChatMessage, IChatUser } from 'interfaces/state.interfaces/chat-interface';

export interface Props {
  roomId: string;
  profileId: string | null;
  messages: IChatMessage[];
  allUserList: IChatUser[];
  currentChatUser: IChatUser;
  chatContentRef: RefObject<HTMLDivElement>;
  handleSubmit: (event: SyntheticEvent) => void;
  handleKeyPress: (event: KeyboardEvent) => void;
}
