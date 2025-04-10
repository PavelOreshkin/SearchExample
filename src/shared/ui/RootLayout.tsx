import { memo } from 'react';

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen justify-center">
      <div className="flex w-full min-w-[320px] max-w-[1184px] px-11 pb-20 pt-13 max-sm:px-4 max-sm:pt-4">
        {children}
      </div>
    </div>
  );
};

export default memo(RootLayout);
