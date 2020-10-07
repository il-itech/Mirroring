import { Observable } from 'rxjs';
import { AjaxRequest, AjaxResponse } from 'rxjs/ajax';

export type AjaxCreationMethod = (options: AjaxRequest) => Observable<AjaxResponse>;
