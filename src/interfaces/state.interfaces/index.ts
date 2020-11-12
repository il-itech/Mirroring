import { ISystem } from './system-interface';
import { ICoronavirus } from './coronavirus-interface';
import { IChat } from './chat-interface';
import { IForms } from './forms.interfaces/forms-interface';
import { IAuth } from './auth-interface';
import { IProfile } from './profile-interface';

export interface IState {
  system: ISystem;
  drawers: Record<string, boolean>;
  coronavirus: ICoronavirus;
  chat: IChat;
  forms: IForms;
  auth: IAuth;
  profile: IProfile;
}

export type IAdditionalState = Record<string, string>;
