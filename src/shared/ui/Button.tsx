import { memo } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter') onClick();
  };

  return (
    <button
      className={`text-2xl-bold h-13 w-full rounded-sm bg-pink font-bold text-white shadow-md shadow-gray-dark/70 ease-in-out hover:bg-pink/80 active:shadow-lg contrast-more:bg-pinkContrast max-sm:h-10 max-sm:text-base ${className}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      {children}
    </button>
  );
};

export default memo(Button);
