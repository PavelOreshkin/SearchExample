import { memo } from 'react';
import Select from '@/shared/ui/Select';
import Button from '@/shared/ui/Button';
import Range from '@/shared/ui/Range';

// type Props = {
//   title: string;
//   options: {
//     label: string;
//     value: string;
//   }[];
// };

// : React.FC<Props>

// enum FilterType {
//   Select,
//   Range,
// }

type SelectFilter = {
  type: 'Select';
  title: string;
  options: { label: string; value: string }[];
};

type RangeFilter = {
  type: 'Range';
  title: string;
  fromOptions: { label: string; value: string }[];
  toOptions: { label: string; value: string }[];
};

type Filter = (SelectFilter | RangeFilter)[];

const FILTERS: Filter = [
  {
    type: 'Select',
    title: 'Я ищу психолога',
    options: [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
    ],
  },
  {
    type: 'Range',
    title: 'В возрасте',
    fromOptions: [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
    ],
    toOptions: [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
    ],
  },
  {
    type: 'Select',
    title: 'Тема',
    options: [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
    ],
  },
  {
    type: 'Select',
    title: 'Квалификация',
    options: [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
    ],
  },
  {
    type: 'Select',
    title: 'Рейтинг',
    options: [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
    ],
  },
];

export const FiltersPanel = memo(() => {
  return (
    <div className="grid grid-cols-1 gap-x-20 gap-y-9 max-sm:gap-y-5 md:grid-cols-2 lg:grid-cols-3">
      {FILTERS.map((filter) => (
        <div className="">
          {filter.type === 'Select' ? (
            <Select title={filter.title} options={filter.options} />
          ) : null}
          {filter.type === 'Range' ? (
            <Range
              title={filter.title}
              fromOptions={filter.fromOptions}
              toOptions={filter.toOptions}
            />
          ) : null}
        </div>
      ))}
      <div className="flex items-end">
        <Button>Показать анкеты</Button>
      </div>
    </div>
  );
});
