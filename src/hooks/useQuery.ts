import { useState } from 'react';

import { getSearchData } from '@/apis/api';
import { CANNOT_SEARCH_REG } from '@/constants';
import { SearchData } from '@/types/types';
import testByReg from '@/utils/testByReg';

const useQuery = (searchText: string) => {
  const [data, setData] = useState<SearchData[] | null>([]);

  const callApi = async () => {
    await getSearchData(searchText)
      .then(({ data }) => setData(data))
      .catch((error) => alert(error));
  };

  const checkSearchable = () => {
    return testByReg(searchText, CANNOT_SEARCH_REG);
  };

  const fetch = () => {
    const stopSearch = checkSearchable();
    if (stopSearch) return setData(null);

    callApi();
  };

  return { data, fetch };
};

export default useQuery;
