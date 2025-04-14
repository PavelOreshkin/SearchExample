import { memo, useCallback } from 'react';
import { useGetSubjectsQuery } from '@/entities/subjects';
import type { ParsedSpecialist } from '@/entities/specialist/model/types';
import { SpecialistCard } from './SpecialistCard';

type SpecialistsListProps = {
  specialists: ParsedSpecialist[];
};

export const SpecialistsList: React.FC<SpecialistsListProps> = memo(
  ({ specialists }) => {
    const { data: subjects } = useGetSubjectsQuery();

    const findDefaultSubjectName = useCallback(
      (subjectId: ParsedSpecialist['subjectId']) =>
        subjects?.find((subject) => subject.id === subjectId)?.name || '',
      [subjects],
    );

    return (
      <main className="grid grid-cols-2 gap-x-5 gap-y-10 max-sm:mt-2 max-sm:gap-x-2 max-sm:gap-y-4 lg:grid-cols-3">
        {specialists?.map((specialist) => (
          <SpecialistCard
            key={specialist.userId}
            userId={specialist.userId}
            name={specialist.name}
            age={specialist.age}
            sex={specialist.sex}
            isOnline={specialist.isOnline}
            defaultSubjectName={findDefaultSubjectName(specialist.subjectId)}
            subjectsCount={specialist.subjectsCount}
            wasTimeAgo={specialist.wasTimeAgo}
            rating={specialist.rating}
            photoUrl={specialist.photoUrl}
          />
        ))}
      </main>
    );
  },
);
