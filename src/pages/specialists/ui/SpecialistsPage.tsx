import { memo } from 'react';
import { FiltersPanel } from '@/features/specialistFilter';
import {
  SpecialistCard,
  useGetPsychologistsQuery,
} from '@/entities/specialist';
import Button from '@/shared/ui/Button';
import { useGetSubjectsQuery } from '@/entities/subjects';

const CARD_MOCK = [
  { name: 'Катерина', age: '45', isVip: true, theme: 'тема', themeCount: 4 },
  { name: 'Катерина', age: '45', isVip: true, theme: 'тема', themeCount: 4 },
  { name: 'Катерина', age: '45', isVip: true, theme: 'тема', themeCount: 4 },
  { name: 'Катерина', age: '45', isVip: true, theme: 'тема', themeCount: 4 },
  { name: 'Катерина', age: '45', isVip: true, theme: 'тема', themeCount: 4 },
  { name: 'Катерина', age: '45', isVip: true, theme: 'тема', themeCount: 4 },
  { name: 'Катерина', age: '45', isVip: true, theme: 'тема', themeCount: 4 },
  { name: 'Катерина', age: '45', isVip: true, theme: 'тема', themeCount: 4 },
];

export const SpecialistsPage = memo(() => {
  // const { data, isLoading, fetchNextPage } = useGetPsychologistsQuery();
  // const { data, isLoading, fetchNextPage } = useGetPsychologistsQuery({
  //   level: 0,
  //   sex: 1,
  //   subjectId: 1,
  //   profSpeciality: 3,
  //   isCertified: true,
  //   ratingFrom: 0,
  //   ratingTo: 0,
  //   ageFrom: 18,
  //   ageTo: 99,
  //   filterType: 0,
  //   limit: 12,
  //   offset: 0,
  // });
  // console.log('data: ', data);
  // console.log('isLoading: ', isLoading);

  const { data, isLoading } = useGetSubjectsQuery();
  // console.log('data: ', data);
  // console.log('isLoading: ', isLoading);

  return (
    <div className="flex grow flex-col">
      <FiltersPanel />
      <div className="my-6 w-full border-b border-b-gray-light max-sm:hidden" />
      <div className="grow">
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 max-sm:gap-y-5 lg:grid-cols-3">
          {CARD_MOCK.map((card, index) => (
            <SpecialistCard
              key={index}
              name="Катерина"
              age="45"
              isVip
              theme="тема"
              themeCount={4}
              lastTime="Была 2 часа назад"
              // rating="70"
            />
          ))}
        </div>
      </div>
      <div className="mt-10 w-full max-w-[312px] self-center">
        <Button>Показать ещё</Button>
      </div>
    </div>
  );
});
