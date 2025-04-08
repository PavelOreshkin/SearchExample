import { memo, useEffect, useMemo } from 'react';
import Select from '@/shared/ui/Select';
import Button from '@/shared/ui/Button';
import Range from '@/shared/ui/Range';
import { useAppSelector } from '@/shared/lib/hooks.ts';
import { selectSubjectOptions } from '@/entities/subjects';
import { useQueryFilters } from '../lib/useQueryFilters';

type Filter = {
  type: 'Select' | 'Range';
  title: string;
  query: string;
  options: { label: string; value: string | number }[];
  initialValue?: any;
  initialValueFrom?: any;
  initialValueTo?: any;
  placeholder?: string;
};

const ageRange = Array.from({ length: 99 - 18 + 1 }, (_, i) => ({
  label: String(i + 18),
  value: i + 18,
}));

const INITIAL_FILTER_VALUES = {
  ageFrom: '18',
  ageTo: '99',
};

export const FiltersPanel = memo(() => {
  const subjectOptions = useAppSelector(selectSubjectOptions);
  const { queryFilters, setQueryFilter } = useQueryFilters(
    INITIAL_FILTER_VALUES,
  );

  const filters: Filter[] = useMemo(
    () => [
      {
        type: 'Select',
        title: 'Я ищу психолога',
        placeholder: 'Любого пола',
        query: 'sex',
        initialValue: queryFilters.sex,
        options: [
          { label: 'мужчина', value: 1 },
          { label: 'женщина', value: 2 },
        ],
      },
      {
        type: 'Range',
        title: 'В возрасте',
        query: 'age',
        initialValueFrom: queryFilters.ageFrom || INITIAL_FILTER_VALUES.ageFrom,
        initialValueTo: queryFilters.ageTo || INITIAL_FILTER_VALUES.ageTo,
        options: ageRange,
      },
      {
        type: 'Select',
        title: 'Тема',
        placeholder: 'Любая тема',
        query: 'subjectId',
        initialValue: queryFilters.subjectId,
        options: subjectOptions,
      },
      {
        type: 'Select',
        title: 'Квалификация',
        placeholder: 'Все варианты',
        query: 'profSpeciality',
        initialValue: queryFilters.profSpeciality,
        options: [
          { label: 'Консультант', value: 1 },
          { label: 'Сексолог', value: 2 },
          { label: 'Коуч', value: 3 },
        ],
      },
      {
        type: 'Select',
        isRangeCalculation: true,
        title: 'Рейтинг',
        placeholder: 'Не важен',
        query: 'rating',
        initialValue: queryFilters.rating,
        options: [
          { label: 'новые', value: '0-0' },
          { label: 'от 100 до 90', value: '90-100' },
          { label: 'от 89 до 80', value: '89-80' },
          { label: 'от 79 до 70', value: '79-70' },
          { label: 'от 69 до 60', value: '69-60' },
          { label: 'от 59 до 50', value: '59-50' },
          { label: 'от 49 до 40', value: '49-40' },
          { label: 'от 39 до 30', value: '39-30' },
          { label: 'от 29 до 20', value: '29-20' },
        ],
      },
    ],
    [subjectOptions],
  );

  const handleChangeFilter = (filters: any) => {
    setQueryFilter(filters);
  };

  return (
    <div className="grid grid-cols-1 gap-x-20 gap-y-9 max-sm:gap-y-5 md:grid-cols-2 lg:grid-cols-3">
      {filters.map((filter) => (
        <div key={filter.title}>
          {filter.type === 'Select' ? (
            <Select {...filter} onChange={handleChangeFilter} />
          ) : null}
          {filter.type === 'Range' ? (
            <Range {...filter} onChange={handleChangeFilter} />
          ) : null}
        </div>
      ))}
      <div className="flex items-end">
        <Button>Показать анкеты</Button>
      </div>
    </div>
  );
});
