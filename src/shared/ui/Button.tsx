import { memo } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<Props> = ({ children, className }) => {
  return (
    <button
      className={`text-2xl-bold h-13 w-full bg-pink font-bold text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default memo(Button);
