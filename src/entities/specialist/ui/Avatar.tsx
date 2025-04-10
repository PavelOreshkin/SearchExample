import { memo, useMemo } from 'react';
import noPhotoMan from '../assets/no_photo_man.svg';
import noPhotoWoman from '../assets/no_photo_woman.svg';
import noPhoto from '../assets/no_photo.svg';
import type { ParsedSpecialist } from '../model/types';

type AvatarProps = Pick<ParsedSpecialist, 'sex' | 'photoUrl'>;

export const Avatar: React.FC<AvatarProps> = memo(({ sex, photoUrl }) => {
  const avatar = useMemo(() => {
    if (photoUrl) return photoUrl;
    if (sex === 1) return noPhotoMan;
    if (sex === 2) return noPhotoWoman;
    return noPhoto;
  }, [photoUrl, sex]);

  return (
    <img
      src={avatar}
      alt="specialist photo"
      className="aspect-square w-full max-w-full rounded-sm border border-gray-light"
    />
  );
});
