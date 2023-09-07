import { useState } from 'react';

import { getSearchData } from '@/apis/api';
import { CACHE_TIME, CANNOT_SEARCH_REG } from '@/constants';
import { SearchData } from '@/types/types';
import { getCachedData, setCachedData } from '@/utils/storage';
import testByReg from '@/utils/testByReg';

const useQuery = (searchText: string) => {
  const nowDate = Date.now();
  const staleTime = nowDate + CACHE_TIME;

  const [data, setData] = useState<SearchData[] | null>([]);

  const callApi = async () => {
    await getSearchData(searchText)
      .then(({ data }) => {
        setData(data);
        setCachedData(searchText, { data, deadDate: staleTime });
      })
      .catch((error) => alert(error));
  };

  const checkSearchable = () => {
    return testByReg(searchText, CANNOT_SEARCH_REG);
  };

  const fetch = () => {
    const stopSearch = checkSearchable();
    if (stopSearch) return setData(null);

    const cacheData = getCachedData(searchText);
    if (cacheData) setData(cacheData.data);
    else callApi();
  };

  return { data, fetch };
};

export default useQuery;
