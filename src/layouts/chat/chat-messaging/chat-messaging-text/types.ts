import { MouseEventHandler } from 'react';

export interface Props {
  roomId: string;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
  handleKeyPress: (event: KeyboardEvent) => void;
}
