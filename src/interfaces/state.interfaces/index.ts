import { ISystem } from './system-interface';
import { ICoronavirus } from './coronavirus-interface';
import { IChat } from './chat-interface';
import { IForms } from './forms.interfaces/forms-interface';
import { IAuth } from './auth-interface';
import { IProfile } from './profile-interface';

export interface IState {
  system: ISystem;
  coronavirus: ICoronavirus;
  chat: IChat;
  forms: IForms;
  auth: IAuth;
  profile: IProfile;
}

export interface IAdditionalState {
  [key: string]: string;
}
