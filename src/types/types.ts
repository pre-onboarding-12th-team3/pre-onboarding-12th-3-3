import { ChangeEvent } from 'react';

export interface SearchApiResponse {
  sickCd: string;
  sickNm: string;
}

export interface CacheContextTypes {
  data: SearchApiResponse;
  deadDate: number;
}

export interface EventTypes {
  changeInput: ChangeEvent<HTMLInputElement>;
}
