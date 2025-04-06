import React, { memo } from "react";
import "./index.scss";

type Props = {
  children: any;
};

const Button: React.FC<Props> = ({ children }) => {
  return <button className="Button">{children}</button>;
};

export default memo(Button);
