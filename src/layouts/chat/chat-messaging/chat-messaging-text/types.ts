import { SyntheticEvent } from 'react';

export interface Props {
  roomId: string;
  handleSubmit: (event: SyntheticEvent) => void;
  handleKeyPress: (event: KeyboardEvent) => void;
}
