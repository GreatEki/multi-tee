import * as React from "react";
import InputCSS from "./Input.module.css";

interface Props {
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = (props) => {
  return (
    <div>
      <input type={props.type} onChange={props.onChange} />
    </div>
  );
};

export default Input;
