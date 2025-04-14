import { memo, useCallback, useRef } from 'react';
import Select from '@/shared/ui/Select';
import Button from '@/shared/ui/Button';
import Range from '@/shared/ui/Range';
import { useAppSelector } from '@/shared/lib/hooks.ts';
import { selectSubjectOptions } from '@/entities/subjects';
import type { SpecialistFilters } from '@/entities/specialist/model/types';
import { useQueryFilters } from '../lib/useQueryFilters';
import { equal } from '@/shared/lib/equal';

const AGE_OPTIONS = Array.from({ length: 99 - 18 + 1 }, (_, i) => ({
  label: String(i + 18),
  value: i + 18,
}));

const SEX_OPTIONS = [
  { label: 'мужчина', value: 1 },
  { label: 'женщина', value: 2 },
];

const PROF_SPECIALITY_OPTIONS = [
  { label: 'Консультант', value: 1 },
  { label: 'Сексолог', value: 2 },
  { label: 'Коуч', value: 3 },
];

const RATING_OPTIONS = [
  { label: 'новые', value: '0-0' },
  { label: 'от 100 до 80', value: '80-100' },
  { label: 'от 79 до 60', value: '60-79' },
  { label: 'от 59 до 40', value: '40-79' },
];

export const INITIAL_FILTER_VALUES = {
  ageFrom: '18',
  ageTo: '99',
  limit: '12',
  offset: '0',
};

export const FiltersPanel = memo(() => {
  const cachedFilterRef = useRef<SpecialistFilters>();
  const filterRef = useRef<SpecialistFilters>();
  const { queryFilters, setQueryFilter } = useQueryFilters(
    INITIAL_FILTER_VALUES,
  );

  const handleChangeFilter = useCallback(
    (filters: Record<string, string | undefined>) => {
      filterRef.current = {
        ...filterRef.current,
        ...(filters as SpecialistFilters),
      };
    },
    [],
  );

  const handleApplyFilter = useCallback(() => {
    const filter = filterRef.current;
    const cachedFilter = cachedFilterRef.current;

    if (!filter) return;
    if (equal(filter, cachedFilter)) return;

    cachedFilterRef.current = filterRef.current;
    setQueryFilter({
      ...INITIAL_FILTER_VALUES,
      ...filter,
    });
  }, [INITIAL_FILTER_VALUES]);

  const subjectOptions = useAppSelector(selectSubjectOptions);

  return (
    <section className="grid grid-cols-1 gap-x-20 gap-y-9 rounded-sm max-sm:gap-y-5 max-sm:border max-sm:border-gray-light max-sm:p-2 md:grid-cols-2 lg:grid-cols-3">
      <Select
        title="Я ищу психолога"
        placeholder="Любого пола"
        query="sex"
        initialValue={queryFilters.sex}
        options={SEX_OPTIONS}
        isSpecialTitleSize
        onChange={handleChangeFilter}
      />
      <Range
        title="В возрасте"
        query="age"
        initialValueFrom={queryFilters.ageFrom || INITIAL_FILTER_VALUES.ageFrom}
        initialValueTo={queryFilters.ageTo || INITIAL_FILTER_VALUES.ageTo}
        options={AGE_OPTIONS}
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
        options={PROF_SPECIALITY_OPTIONS}
        onChange={handleChangeFilter}
      />
      <Select
        title="Рейтинг"
        placeholder="Не важен"
        query="rating"
        initialValue={`${queryFilters.ratingFrom}-${queryFilters.ratingTo}`}
        options={RATING_OPTIONS}
        onChange={handleChangeFilter}
        isRangeCalculation
      />
      <div className="flex items-end">
        <Button onClick={handleApplyFilter}>Показать анкеты</Button>
      </div>
    </section>
  );
});
