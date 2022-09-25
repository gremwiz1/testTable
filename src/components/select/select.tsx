import React, { FC } from "react";
import "./select.css";

interface IOption {
  name: string;
  value: string;
}
interface ISelect {
  options: IOption[];
  defaultValue: string;
  value: string;
  onChange: (selectedSort: string) => void;
}
const Select: FC<ISelect> = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className="select"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="">{defaultValue}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
