import { memo } from 'react';
import { FiltersPanel, useQueryFilters } from '@/features/specialistFilter';
import { SpecialistsList, useGetSpecialistsQuery } from '@/entities/specialist';
import Button from '@/shared/ui/Button';
import emptySearchIcon from '../assets/empty_search_icon.svg';
import Loading from '@/shared/ui/Loading';
import { INITIAL_FILTER_VALUES } from '@/features/specialistFilter/ui/FiltersPanel';
import Divider from '@/shared/ui/Divider';
import EmptyPagePlaceholder from '@/shared/ui/EmptyPagePlaceholder';
import { ErrorBoundary } from '@/shared/ui/Error';
import { SpecialistErrorUI } from './SpecialistErrorUI';
import { FilterErrorUI } from './FilterErrorUI';

const PAGE_SIZE = Number(INITIAL_FILTER_VALUES.limit);

const SpecialistsPage = memo(() => {
  const { queryFilters, setQueryFilter } = useQueryFilters();
  const {
    data,
    isFetching,
    isError: isGetSpecialistError,
  } = useGetSpecialistsQuery(queryFilters, {
    skip: Object.keys(queryFilters).length === 0,
  });
  const { specialists, totalCount } = data || {};

  const handleFetchNextPage = () => {
    const prevOffset = Number(queryFilters.offset) || 0;
    setQueryFilter({ offset: String(prevOffset + PAGE_SIZE) });
  };

  const isShowFetchMoreButton =
    specialists?.length &&
    queryFilters.limit &&
    queryFilters.offset &&
    totalCount &&
    Number(queryFilters.limit) + Number(queryFilters.offset) < totalCount;

  return (
    <div className="flex grow flex-col">
      <ErrorBoundary fallback={<FilterErrorUI />}>
        <FiltersPanel />
      </ErrorBoundary>
      <Divider />
      {isGetSpecialistError ? (
        <SpecialistErrorUI />
      ) : (
        <>
          <div className="grow">
            <ErrorBoundary fallback={<SpecialistErrorUI />}>
              {specialists?.length ? (
                <SpecialistsList specialists={specialists} />
              ) : null}
            </ErrorBoundary>
            {!specialists?.length && !isFetching && (
              <EmptyPagePlaceholder
                iconSrc={emptySearchIcon}
                text="К сожалению, нет анкет с такими параметрами"
              />
            )}
          </div>
          {isFetching ? (
            <div className="mt-7 flex justify-center">
              <Loading />
            </div>
          ) : null}
          {isShowFetchMoreButton ? (
            <div className="mt-10 w-full max-w-[312px] self-center">
              <Button onClick={handleFetchNextPage}>Показать ещё</Button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
});

export default SpecialistsPage;
