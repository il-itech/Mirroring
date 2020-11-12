import { ICommon } from './common-interface';

export interface IChatUser {
  _id: string;
  firstname: string;
  lastname: string;
  avatar: string;
}

export interface IChatMessage {
  roomId: string;
  sender: string;
  message: string;
  date: string;
}

export type IChatMessages = Record<string, IChatMessage[]>;

export interface IChat extends ICommon {
  messages: IChatMessages;
  allUserList: IChatUser[];
}
