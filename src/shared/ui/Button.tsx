import { memo } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={`text-2xl-bold h-13 w-full bg-pink font-bold text-white max-sm:h-10 max-sm:text-base ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default memo(Button);
