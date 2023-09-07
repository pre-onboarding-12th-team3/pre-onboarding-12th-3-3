import axios from 'axios';

import { BASE_URL, END_POINT } from '@/constants';
import { SearchData } from '@/types/types';


export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getSearchData = async (keyword: string) => {
  console.info('calling api');

  const res = await axiosInstance.get<SearchData[]>(`${END_POINT}?q=${keyword}`);
  return res;
};
