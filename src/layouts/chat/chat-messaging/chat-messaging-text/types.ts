import { MouseEventHandler, KeyboardEvent } from 'react';

export interface Props {
  roomId: string;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
  handleKeyPress: (event: KeyboardEvent<HTMLFormElement>) => void;
}
