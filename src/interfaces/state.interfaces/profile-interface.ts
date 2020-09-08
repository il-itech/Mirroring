import { ICommon } from './common-interface';

export interface IProfile extends ICommon {
  _id: string | null;
  firstname: string;
  lastname: string;
  email: string;
  avatar: string;
}
