import React, { memo } from "react";
import "./index.scss";

type Props = {
  title: string;
  options: {
    label: string;
    value: string;
  }[];
};

const Select: React.FC<Props> = ({ title, options }) => {
  return (
    <div className="Select">
      <label htmlFor="options" className="Select__title">
        {title}
      </label>
      <select className="Select__options" name="options" id="options">
        {options.map(({ value, label }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
    </div>
  );
};

export default memo(Select);
