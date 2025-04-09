import { memo, useMemo, useState } from 'react';
import type { SelectProps } from '@/shared/ui/Select';
import Select from '@/shared/ui/Select';
import Button from '@/shared/ui/Button';
import type { RangeProps } from '@/shared/ui/Range';
import Range from '@/shared/ui/Range';
import { useAppSelector } from '@/shared/lib/hooks.ts';
import { selectSubjectOptions } from '@/entities/subjects';
import { useQueryFilters } from '../lib/useQueryFilters';
import type { QueryFilterType } from '../lib/useQueryFilters';

type SelectFilter = Omit<SelectProps, 'onChange'> & {
  type: 'Select';
};

type RangeFilter = Omit<RangeProps, 'onChange'> & {
  type: 'Range';
};

type Filter = SelectFilter | RangeFilter;

const ageRange = Array.from({ length: 99 - 18 + 1 }, (_, i) => ({
  label: String(i + 18),
  value: i + 18,
}));

const INITIAL_FILTER_VALUES = {
  ageFrom: '18',
  ageTo: '99',
  limit: '12',
  offset: '0',
};

export const FiltersPanel = memo(() => {
  const [filter, setFilter] = useState<QueryFilterType>();
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
        isSpecialTitleSize: true,
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
          { label: 'от 100 до 80', value: '80-100' },
          { label: 'от 79 до 60', value: '60-79' },
          { label: 'от 59 до 40', value: '40-79' },
        ],
      },
    ],
    [subjectOptions],
  );

  const handleChangeFilter = (filters: QueryFilterType) => {
    setFilter(filters);
  };

  const handleApplyFilter = () => {
    if (!filter) return;
    setQueryFilter(filter);
  };

  return (
    <div className="grid grid-cols-1 gap-x-20 gap-y-9 rounded-sm max-sm:gap-y-5 max-sm:border max-sm:border-gray-light max-sm:p-2 md:grid-cols-2 lg:grid-cols-3">
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
        <Button onClick={handleApplyFilter}>Показать анкеты</Button>
      </div>
    </div>
  );
});
