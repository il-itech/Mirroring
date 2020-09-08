import { ISignUpForm } from './form-sign-up.interface';
import { ISignInForm } from './form-sign-in.interface';
import { IChatMessageForm } from './form-chat-message.interface';
import { IChangePasswordForm } from './form-change-password.interface';
import { IChangeCredentialsForm } from './form-change-credentials.interface';

export interface IForms {
  signUp: ISignUpForm;
  signIn: ISignInForm;
  chatMessage: IChatMessageForm;
  changePassword: IChangePasswordForm;
  changeCredentials: IChangeCredentialsForm;
}
