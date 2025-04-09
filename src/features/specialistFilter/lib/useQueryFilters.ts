import type { SpecialistFilters } from '@/entities/specialist/model/types';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useQueryFilters = (initialFilters?: SpecialistFilters) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getQueryFilters = (): SpecialistFilters => {
    const result = {} as SpecialistFilters;
    searchParams.forEach((value, key) => {
      result[key as keyof SpecialistFilters] = value;
    });
    return result;
  };

  const setQueryFilter = (newFilters: Partial<SpecialistFilters>) => {
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
    const filterQueue = {} as SpecialistFilters;
    Object.entries(initialFilters).forEach(([key, value]) => {
      if (!(key in queryFilters)) {
        filterQueue[key as keyof SpecialistFilters] = value;
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
