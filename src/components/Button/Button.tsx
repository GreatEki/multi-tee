import React from "react";

interface Props {
  btnText: string;
  onClick: () => void;
}
const Button: React.FC<Props> = (props) => {
  const { btnText, onClick } = props;
  return (
    <div>
      <button onClick={onClick}>{btnText}</button>
    </div>
  );
};

export default Button;
