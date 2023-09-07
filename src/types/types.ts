import { ChangeEvent, FormEvent } from 'react';

export interface CacheContextTypes {
  data: SearchData[];
  deadDate: number;
}

export interface EventTypes {
  changeInput: ChangeEvent<HTMLInputElement>;
  form: FormEvent<HTMLFormElement>;
}

export interface SearchData {
  sickCd: string;
  sickNm: string;
}
