import { HttpParams } from '@angular/common/http';

export interface RequestConfigModel {
  url: string;
  method: string;
  headers: {
    [index: string]: string;
  };
  params?: HttpParams;
  body?: object;
}
