import { ICommon } from './common-interface';

export interface IProfile extends ICommon {
  _id: null | string;
  firstname: null | string;
  lastname: null | string;
  email: null | string;
}
