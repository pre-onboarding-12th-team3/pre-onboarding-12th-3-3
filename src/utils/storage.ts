import { CacheContextTypes } from '../types/types';

const setCachedData = (key: string, data: CacheContextTypes) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

const getCachedData = (key: string): CacheContextTypes | null => {
  const cachedData = sessionStorage.getItem(key);
  if (cachedData) {
    return JSON.parse(cachedData);
  }
  return null;
};

export { setCachedData, getCachedData };
