import { ICommon } from './common-interface';

interface IChatUser {
  _id: string;
  firstname: string;
  lastname: string;
}

interface IChatMessage {
  sender: string;
  message: string;
  date: string;
}

interface IChatMessages {
  [key: string]: Array<IChatMessage>;
}

export interface IChat extends ICommon {
  messages: IChatMessages;
  allUserList: Array<IChatUser>;
}
