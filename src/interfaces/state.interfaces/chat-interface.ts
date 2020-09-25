import { ICommon } from './common-interface';

export interface IChatUser {
  _id: string;
  firstname: string;
  lastname: string;
  avatar: string;
}

export interface IChatMessage {
  sender: string;
  message: string;
  date: string;
}

export interface IChatMessages {
  [key: string]: IChatMessage[];
}

export interface IChat extends ICommon {
  messages: IChatMessages;
  allUserList: Array<IChatUser>;
}
