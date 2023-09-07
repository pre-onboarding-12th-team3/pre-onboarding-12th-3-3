import { CANNOT_SEARCH_REG } from '@/constants';
import testByReg from '@/utils/testByReg';

const useQuery = () => {
  const checkSearchable = (searchText: string) => {
    return testByReg(searchText, CANNOT_SEARCH_REG);
  };

  const fetch = (searchText: string) => {
    const stopSearch = checkSearchable(searchText);
    if (stopSearch) return; // Initailize data
  };

  return { fetch };
};

export default useQuery;
