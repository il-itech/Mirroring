import { ICommon } from './common-interface';

export interface IProfile extends ICommon {
  _id: string;
  firstname: string;
  lastname: string;
  accessToken: string;
  email: string;
  avatar: string;
}
