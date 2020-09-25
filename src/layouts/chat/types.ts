import { RefObject, SyntheticEvent } from 'react';

import { IChat } from 'interfaces/state.interfaces/chat-interface';

export interface Props {
  roomId: string;
  chat: IChat;
  profileId: string | null;
  chatContentRef: RefObject<HTMLDivElement>;
  handleSubmit: (event: SyntheticEvent) => void;
  handleKeyPress: (event: KeyboardEvent) => void;
}
