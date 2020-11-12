import { createActionCreator } from 'deox';

import { ISignInFormData } from 'interfaces/state.interfaces/forms.interfaces/form-sign-in.interface';
import { ISignUpFormData } from 'interfaces/state.interfaces/forms.interfaces/form-sign-up.interface';
import { IChangeCredentialsFormData } from 'interfaces/state.interfaces/forms.interfaces/form-change-credentials.interface';
import { IChangePasswordFormData } from 'interfaces/state.interfaces/forms.interfaces/form-change-password.interface';
import { IResetPasswordFormData } from 'interfaces/state.interfaces/forms.interfaces/form-reset-password';

export const signIn = createActionCreator(
  'SIGN_IN',
  resolve => (formData: ISignInFormData) => resolve(formData),
);

export const signUp = createActionCreator(
  'SIGN_UP',
  resolve => (formData: ISignUpFormData) => resolve(formData),
);

export const signOut = createActionCreator('SIGN_OUT');

export const confirmEmail = createActionCreator(
  'CONFIRM_EMAIL',
  resolve => (token: string) => resolve(token),
);

export const changeCredentials = createActionCreator(
  'CHANGE_CREDENTIALS',
  resolve => (formData: IChangeCredentialsFormData) => resolve(formData),
);

export const changePassword = createActionCreator(
  'CHANGE_PASSWORD',
  resolve => (formData: IChangePasswordFormData & { token: string }) => resolve(formData),
);

export const resetPassword = createActionCreator(
  'RESET_PASSWORD',
  resolve => (formData: IResetPasswordFormData) => resolve(formData),
);

export const setAuthStatus = createActionCreator(
  'SET_AUTH_STATUS',
  resolve => (status: boolean) => resolve(status),
);
