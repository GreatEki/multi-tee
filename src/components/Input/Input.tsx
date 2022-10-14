import * as React from "react";
import InputCSS from "./Input.module.css";

interface Props {
  type: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = (props) => {
  return (
    <div>
      <input
        className={InputCSS.input}
        type={props.type}
        required={props.required}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
