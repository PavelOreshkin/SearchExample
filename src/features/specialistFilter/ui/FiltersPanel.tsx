import { memo, useCallback, useState } from 'react';
import Select from '@/shared/ui/Select';
import Button from '@/shared/ui/Button';
import Range from '@/shared/ui/Range';
import { useAppSelector } from '@/shared/lib/hooks.ts';
import { selectSubjectOptions } from '@/entities/subjects';
import type { SpecialistFilters } from '@/entities/specialist/model/types';
import { useQueryFilters } from '../lib/useQueryFilters';

const ageRange = Array.from({ length: 99 - 18 + 1 }, (_, i) => ({
  label: String(i + 18),
  value: i + 18,
}));

export const INITIAL_FILTER_VALUES = {
  ageFrom: '18',
  ageTo: '99',
  limit: '12',
  offset: '0',
};

export const FiltersPanel = memo(() => {
  const [filter, setFilter] = useState<SpecialistFilters>();
  const subjectOptions = useAppSelector(selectSubjectOptions);
  const { queryFilters, setQueryFilter } = useQueryFilters(
    INITIAL_FILTER_VALUES,
  );

  const handleChangeFilter = useCallback(
    (filters: Record<string, string | undefined>) => {
      setFilter((prev) => ({ ...prev, ...(filters as SpecialistFilters) }));
    },
    [],
  );

  const handleApplyFilter = () => {
    if (!filter) return;
    setQueryFilter({
      ...filter,
      limit: INITIAL_FILTER_VALUES.limit,
      offset: INITIAL_FILTER_VALUES.offset,
    });
  };

  return (
    <section className="grid grid-cols-1 gap-x-20 gap-y-9 rounded-sm max-sm:gap-y-5 max-sm:border max-sm:border-gray-light max-sm:p-2 md:grid-cols-2 lg:grid-cols-3">
      <Select
        title="Я ищу психолога"
        placeholder="Любого пола"
        query="sex"
        initialValue={queryFilters.sex}
        options={[
          { label: 'мужчина', value: 1 },
          { label: 'женщина', value: 2 },
        ]}
        isSpecialTitleSize
        onChange={handleChangeFilter}
      />
      <Range
        title="В возрасте"
        query="age"
        initialValueFrom={queryFilters.ageFrom || INITIAL_FILTER_VALUES.ageFrom}
        initialValueTo={queryFilters.ageTo || INITIAL_FILTER_VALUES.ageTo}
        options={ageRange}
        onChange={handleChangeFilter}
      />
      <Select
        title="Тема"
        placeholder="Любая тема"
        query="subjectId"
        initialValue={queryFilters.subjectId}
        options={subjectOptions}
        onChange={handleChangeFilter}
      />
      <Select
        title="Квалификация"
        placeholder="Все варианты"
        query="profSpeciality"
        initialValue={queryFilters.profSpeciality}
        options={[
          { label: 'Консультант', value: 1 },
          { label: 'Сексолог', value: 2 },
          { label: 'Коуч', value: 3 },
        ]}
        onChange={handleChangeFilter}
      />
      <Select
        title="Рейтинг"
        placeholder="Не важен"
        query="rating"
        initialValue={`${queryFilters.ratingFrom}-${queryFilters.ratingTo}`}
        options={[
          { label: 'новые', value: '0-0' },
          { label: 'от 100 до 80', value: '80-100' },
          { label: 'от 79 до 60', value: '60-79' },
          { label: 'от 59 до 40', value: '40-79' },
        ]}
        onChange={handleChangeFilter}
        isRangeCalculation
      />
      <div className="flex items-end">
        <Button onClick={handleApplyFilter}>Показать анкеты</Button>
      </div>
    </section>
  );
});
