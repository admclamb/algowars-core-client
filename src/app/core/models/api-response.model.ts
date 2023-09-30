import { AppErrorModel } from './app-error.model';

export interface ApiResponseModel<T = any> {
  data: T;
  error: AppErrorModel | null;
}
