import { CACHE_KEY } from '@/constants';
import { CacheContextTypes } from '@/types/types';

const setCachedData = (key: string, data: CacheContextTypes) => {
  const cachedData = JSON.parse(sessionStorage.getItem(CACHE_KEY) || '{}');
  cachedData[key] = data;
  sessionStorage.setItem(CACHE_KEY, JSON.stringify(cachedData));
};

const getCachedData = (key: string) => {
  const cachedData = JSON.parse(sessionStorage.getItem(CACHE_KEY) || '{}');
  if (cachedData[key]) {
    return cachedData[key];
  }
  return null;
};

export { setCachedData, getCachedData };
