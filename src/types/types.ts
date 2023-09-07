export interface SearchApiResponse {
  sickCd: string;
  sickNm: string;
}

export interface CacheContextTypes {
  data: SearchApiResponse;
  deadDate: number;
}
