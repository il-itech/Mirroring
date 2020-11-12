import { IChatMessages, IChatUser } from 'interfaces/state.interfaces/chat-interface';

export interface Props {
  messages: IChatMessages;
  allUserList: IChatUser[];
  matchesSM: boolean;
}
