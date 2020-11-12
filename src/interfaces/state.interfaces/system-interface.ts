import { VariantType } from 'notistack';

export interface ISystem {
  initializedSSRState: boolean;
  accessToken: string;
  globalError: Record<string, string | boolean>;
  globalInProgressStatus: boolean;
  notification: {
    variant: VariantType;
    message: string;
  };
  is404: boolean;
  redirectTo: string;
}
