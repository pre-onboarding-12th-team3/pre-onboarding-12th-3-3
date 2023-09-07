import { CACHE_KEY } from '@/constants';
import { CacheContextTypes } from '@/types/types';

const setCachedData = (key: string, data: CacheContextTypes) => {
  const cachedData = JSON.parse(sessionStorage.getItem(CACHE_KEY) || '{}');
  cachedData[key] = data;
  sessionStorage.setItem(CACHE_KEY, JSON.stringify(cachedData));
};

const getCachedData = (key: string): CacheContextTypes | null => {
  const cachedData = sessionStorage.getItem(key);
  if (cachedData) {
    return JSON.parse(cachedData);
  }
  return null;
};

export { setCachedData, getCachedData };
