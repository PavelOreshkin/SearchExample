import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export type QueryFilterType = Record<string, string | undefined>;

export const useQueryFilters = (initialFilters?: QueryFilterType) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getQueryFilters = (): QueryFilterType => {
    const result: QueryFilterType = {};
    searchParams.forEach((value, key) => {
      result[key] = value;
    });
    return result;
  };

  const setQueryFilter = (newFilters: QueryFilterType) => {
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
    if (!initialFilters) return;
    const queryFilters = getQueryFilters();
    const filterQueue: QueryFilterType = {};
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
