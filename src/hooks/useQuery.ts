import { useState } from 'react';

import { CANNOT_SEARCH_REG } from '@/constants';
import { SearchData } from '@/types/types';
import testByReg from '@/utils/testByReg';

const useQuery = () => {
  const [data, setData] = useState<SearchData[] | null>([]);

  const checkSearchable = (searchText: string) => {
    return testByReg(searchText, CANNOT_SEARCH_REG);
  };

  const fetch = (searchText: string) => {
    const stopSearch = checkSearchable(searchText);
    if (stopSearch) return setData(null);
  };

  return { data, fetch };
};

export default useQuery;
