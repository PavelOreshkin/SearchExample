import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

type Filters = Record<string, string | undefined>;

export const useQueryFilters = (initialFilters: any) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getQueryFilters = (): Filters => {
    const result: Filters = {};
    searchParams.forEach((value, key) => {
      result[key] = value;
    });
    return result;
  };

  const setQueryFilter = (newFilters: Filters) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(newFilters).forEach(([key, value]) => {
      if (value === undefined || value === '') {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    setSearchParams(params);
  };

  useEffect(() => {
    const queryFilters = getQueryFilters();
    const filterQueue = {};
    Object.entries(initialFilters).forEach(([key, value]) => {
      if (!(key in queryFilters)) {
        filterQueue[key] = value;
      }
    });
    setQueryFilter(filterQueue);
  }, []);

  const clearFilters = () => {
    setSearchParams({});
  };

  return {
    queryFilters: getQueryFilters(),
    setQueryFilter,
    clearFilters,
  };
};
