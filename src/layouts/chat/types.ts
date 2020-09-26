import { MouseEventHandler, MutableRefObject } from 'react';

import { IChat } from 'interfaces/state.interfaces/chat-interface';

export interface Props {
  roomId: string;
  chat: IChat;
  profileId: string | null;
  chatContentRef: MutableRefObject<HTMLDivElement>;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
  handleKeyPress: (event: KeyboardEvent) => void;
}
