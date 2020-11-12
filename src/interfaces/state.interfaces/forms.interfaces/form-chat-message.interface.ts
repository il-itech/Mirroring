import { IFormCommon } from '../common-interface';

export interface IChatMessageForm extends IFormCommon {
  formData: Record<string, string>;
}
