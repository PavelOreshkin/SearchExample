import React, { memo } from "react";
import "./index.scss";

type Props = {
  children: any;
};

export const RootLayout: React.FC<Props> = memo(({ children }) => {
  return (
    <div className="RootLayout">
      <div className="RootLayout__content">{children}</div>
    </div>
  );
});
