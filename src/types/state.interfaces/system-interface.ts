import { VariantType } from 'notistack';

export interface ISystem {
  globalError: {
    [key: string]: string;
  };
  globalInProgressStatus: boolean;
  notification: {
    variant: VariantType;
    message: null | string;
  };
  is404: boolean;
  redirectTo: string;
  // redirectTo: null | string;
}
