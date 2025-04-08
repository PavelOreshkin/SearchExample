import { memo } from 'react';

type Props = {
  children: React.ReactNode;
};

export const RootLayout: React.FC<Props> = memo(({ children }) => {
  return (
    <div className="flex min-h-screen justify-center">
      <div className="flex w-full max-w-[1184px] border-2 px-11 pb-20 pt-13">
        {children}
      </div>
    </div>
  );
});
