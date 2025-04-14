import { memo } from 'react';
import type { ParsedSpecialist } from '../model/types';

type InfoProps = Pick<
  ParsedSpecialist,
  'name' | 'age' | 'isOnline' | 'subjectsCount' | 'sex' | 'wasTimeAgo'
> & {
  defaultSubjectName: string;
};

const Info: React.FC<InfoProps> = ({
  name,
  age,
  isOnline,
  defaultSubjectName,
  subjectsCount,
  sex,
  wasTimeAgo,
}) => {
  return (
    <>
      <div className="mt-4 flex gap-1 max-sm:mt-2">
        <div className="flex overflow-hidden whitespace-nowrap text-4xl max-sm:text-base">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap">
            {name}
          </p>
          <p className="ml-1 flex-shrink whitespace-nowrap">, {age}</p>
        </div>
        {isOnline ? (
          <div className="h-3 w-3 rounded-full bg-green max-sm:h-2 max-sm:w-2" />
        ) : null}
      </div>
      <div className="mt-2 flex overflow-hidden text-xl italic max-sm:mt-1 max-sm:text-md">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-gray-dark">
          {defaultSubjectName}
        </p>
        {subjectsCount - 1 > 0 && (
          <p className="ml-1 flex-shrink whitespace-nowrap text-gray-normal max-sm:hidden">
            и ещё {subjectsCount - 1} темы
          </p>
        )}
      </div>
      <p className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-xl text-gray-light max-sm:hidden">
        Был{sex === 2 ? 'а ' : ' '}
        {wasTimeAgo}
      </p>
    </>
  );
};

export default memo(Info);
