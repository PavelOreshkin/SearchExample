import { memo, useMemo, useState } from 'react';
import { FiltersPanel, useQueryFilters } from '@/features/specialistFilter';
import {
  SpecialistCard,
  useGetPsychologistsQuery,
} from '@/entities/specialist';
import Button from '@/shared/ui/Button';
import { useGetSubjectsQuery } from '@/entities/subjects';
import emptySearchIcon from '../assets/empty_search_icon.svg';
import { Loading } from '@/shared/ui/Loading';

const PAGE_SIZE = 12;

export const SpecialistsPage = memo(() => {
  const { data: subjects } = useGetSubjectsQuery();
  // console.log('subjects: ', subjects);
  const { queryFilters, setQueryFilter } = useQueryFilters();
  // console.log('SpecialistsPage queryFilters: ', queryFilters);
  const { data, isFetching } = useGetPsychologistsQuery(queryFilters, {
    skip: Object.keys(queryFilters).length === 0,
  });
  const { specialists, totalCount } = data || {};
  // console.log('data: ', data);
  // console.log('error: ', error);
  // console.log('isLoading: ', isLoading);

  const handleFetchNextPage = () => {
    const prevOffset = Number(queryFilters.offset) || 0;
    setQueryFilter({ offset: String(prevOffset + PAGE_SIZE) });
  };

  const isShowFetchMoreButton =
    queryFilters.limit &&
    queryFilters.offset &&
    totalCount &&
    Number(queryFilters.limit) + Number(queryFilters.offset) < totalCount;

  return (
    <div className="flex grow flex-col">
      <FiltersPanel />
      <div className="my-6 w-full border-b border-b-gray-light max-sm:hidden" />
      <div className="grow">
        {specialists?.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center">
            <img
              src={emptySearchIcon}
              alt="empty page icon"
              className="h-[160px] w-[160px] max-sm:h-[100px] max-sm:w-[100px]"
            />
            <p className="max-w-[264px] text-center text-2xl leading-[160%] max-sm:max-w-[180px] max-sm:text-base max-sm:leading-[160%]">
              К сожалению, нет анкет с такими параметрами
            </p>
          </div>
        )}
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 max-sm:mt-2 max-sm:gap-x-2 max-sm:gap-y-4 lg:grid-cols-3">
          {specialists?.map((specialist) => (
            <SpecialistCard
              key={specialist.userId}
              name={specialist.name}
              age={specialist.age}
              sex={specialist.sex}
              isOnline={specialist.isOnline}
              defaultSubjectName={
                subjects?.data?.find(
                  (subject) => subject.id === specialist.subjectId,
                )?.name || ''
              }
              subjectsCount={specialist.subjectsCount}
              wasTimeAgo={specialist.wasTimeAgo}
              rating={specialist.rating}
              photoUrl={specialist.photoUrl}
            />
          ))}
        </div>
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
    </div>
  );
});
