import React, { FC } from "react";
import "./input.css";

interface IInput {
  placeholder: string;
  type: string;
  value: string;
  onChange: (selectedSort: string) => void;
}
const Input: FC<IInput> = ({ placeholder, type, value, onChange }) => {
  return (
    <input
      className="input"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export default Input;
