import { memo } from 'react';

type EmptyPagePlaceholderProps = {
  iconSrc: string;
  text: string;
};

const EmptyPagePlaceholder: React.FC<EmptyPagePlaceholderProps> = ({
  iconSrc,
  text,
}) => (
  <div className="flex h-full flex-col items-center justify-center">
    <img
      src={iconSrc}
      alt="empty page icon"
      className="h-[160px] w-[160px] max-sm:h-[100px] max-sm:w-[100px]"
    />
    <p className="max-w-[264px] text-center text-2xl leading-[160%] max-sm:max-w-[180px] max-sm:text-base max-sm:leading-[160%]">
      {text}
    </p>
  </div>
);

export default memo(EmptyPagePlaceholder);
