import { memo } from 'react';
import { FiltersPanel } from '@/widgets/filters';
import { SpecialistCard } from '@/entities/specialist';
import Button from '@/shared/ui/Button';

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

export const Search = memo(() => {
  return (
    <div className="flex grow flex-col">
      <FiltersPanel />
      <div className="my-6 w-full border-b border-b-gray-light" />
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
      <div className="mt-10 w-[312px] self-center">
        <Button>Показать ещё</Button>
      </div>
    </div>
  );
});
